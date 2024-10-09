const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());

// Generate mock compliance data with more details
const complianceData = {
  complianceScore: '85%', // Compliance score percentage
  controlsImplemented: 58, // Number of controls implemented
  pendingTasks: 12, // Number of pending tasks
  resolvedIssues: 48, // Number of resolved issues
  openIssues: 12, // Number of open issues
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
  workOrders: Array.from({ length: 20 }, (v, i) => ({
    id: `#20${800 + i}`,
    name: `Work Order ${i + 1}`,
    startDate: `2023-07-${10 + i}`,
    dueDate: `2023-07-${15 + i}`,
    completionDate: `2023-07-${16 + i}`,
    status: i % 2 === 0 ? 'Completed' : 'Pending',
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
