const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());

const complianceData = {
  complianceScore: '85%', // Overall compliance score
  controlsImplemented: 58, // Number of controls implemented
  pendingTasks: 12, // Pending tasks count
  resolvedIssues: 48, // Resolved issues count
  openIssues: 12, // Open issues count

  monthlyData: [
    { month: 'Aug', year: 2022, completedOnTime: 10, completedOverdue: 5, stillOpen: 3 },
    { month: 'Sep', year: 2022, completedOnTime: 15, completedOverdue: 6, stillOpen: 2 },
    { month: 'Oct', year: 2022, completedOnTime: 12, completedOverdue: 7, stillOpen: 4 },
    { month: 'Nov', year: 2022, completedOnTime: 20, completedOverdue: 9, stillOpen: 1 },
    { month: 'Dec', year: 2022, completedOnTime: 22, completedOverdue: 8, stillOpen: 0 },
    { month: 'Jan', year: 2023, completedOnTime: 18, completedOverdue: 5, stillOpen: 2 },
    { month: 'Feb', year: 2023, completedOnTime: 14, completedOverdue: 7, stillOpen: 3 },
    { month: 'Mar', year: 2023, completedOnTime: 24, completedOverdue: 6, stillOpen: 1 },
    { month: 'Apr', year: 2023, completedOnTime: 20, completedOverdue: 4, stillOpen: 0 },
    { month: 'May', year: 2023, completedOnTime: 21, completedOverdue: 8, stillOpen: 2 },
  ],

  // Pie chart data for compliance by status
  complianceByStatus: {
    completed: 85, // Total completed tasks
    pending: 12, // Total pending tasks
    open: 3, // Total open tasks
  },

  // Work orders across different years and months
  workOrders: Array.from({ length: 60 }, (v, i) => ({
    id: `#20${800 + i}`,
    name: `Work Order ${i + 1}`,
    startDate: `2022-${(i % 12) + 1}-${(10 + i % 20)}`, // Spread across 2022 and 2023
    dueDate: `2022-${(i % 12) + 1}-${(15 + i % 20)}`,
    completionDate: `2022-${(i % 12) + 1}-${(16 + i % 20)}`,
    priority: i % 2 === 0 ? 'High' : 'Low', // Priority of the work order
    status: i % 2 === 0 ? 'Completed' : 'Pending', // Status of the work order
    assignedTo: `User ${i + 1}`, // Assigned user
    description: `This is a description for work order ${i + 1}`, // Description
  })),
};

// Endpoint to get compliance metrics with date filtering
app.get('/api/compliance', (req, res) => {
  const { date } = req.query; // Get the date from the query params
  let filteredData = complianceData;

  // If a date is provided, filter work orders and monthly data based on the date
  if (date) {
    const selectedDate = new Date(date);

    // Filter work orders based on startDate
    filteredData = {
      ...complianceData,
      workOrders: complianceData.workOrders.filter((order) => {
        const orderStartDate = new Date(order.startDate);
        return orderStartDate >= selectedDate;
      }),

      // Filter monthlyData based on year and month
      monthlyData: complianceData.monthlyData.filter((data) => {
        const dataDate = new Date(`${data.year}-${data.month}-01`);
        return dataDate >= selectedDate;
      }),
    };
  }

  res.json(filteredData);
});

// Start the server
app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
