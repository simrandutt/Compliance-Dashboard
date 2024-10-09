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
    { month: 'Aug', completedOnTime: 10, completedOverdue: 5, stillOpen: 3 },
    { month: 'Sep', completedOnTime: 15, completedOverdue: 6, stillOpen: 2 },
    { month: 'Oct', completedOnTime: 12, completedOverdue: 7, stillOpen: 4 },
    { month: 'Nov', completedOnTime: 20, completedOverdue: 9, stillOpen: 1 },
    { month: 'Dec', completedOnTime: 22, completedOverdue: 8, stillOpen: 0 },
    { month: 'Jan', completedOnTime: 18, completedOverdue: 5, stillOpen: 2 },
    { month: 'Feb', completedOnTime: 14, completedOverdue: 7, stillOpen: 3 },
    { month: 'Mar', completedOnTime: 24, completedOverdue: 6, stillOpen: 1 },
    { month: 'Apr', completedOnTime: 20, completedOverdue: 4, stillOpen: 0 },
    { month: 'May', completedOnTime: 21, completedOverdue: 8, stillOpen: 2 },
  ],

  // Pie chart data for compliance by status
  complianceByStatus: {
    completed: 85, // Total completed tasks
    pending: 12, // Total pending tasks
    open: 3, // Total open tasks
  },

  // Work orders with more complexity
  workOrders: Array.from({ length: 30 }, (v, i) => ({
    id: `#20${800 + i}`,
    name: `Work Order ${i + 1}`,
    startDate: `2023-07-${10 + i}`,
    dueDate: `2023-07-${15 + i}`,
    completionDate: `2023-07-${16 + i}`,
    priority: i % 2 === 0 ? 'High' : 'Low', // New column: Priority of the work order
    status: i % 2 === 0 ? 'Completed' : 'Pending', // New column: Status of the work order
    assignedTo: `User ${i + 1}`, // New column: Assigned user
    description: `This is a description for work order ${i + 1}`, // New column: Description of the work order
  })),
};

// Endpoint to get compliance metrics
app.get('/api/compliance', (req, res) => {
  res.json(complianceData);
});

// Start the server
app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
