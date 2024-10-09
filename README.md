# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Compliance Dashboard

## Setup Instructions

### Running the Project

#### Frontend

1. Install dependencies:
   'npm install'

2. Run the frontend server:
   'npm start'

3. Open the app in your browser at:
   'http://localhost:3000'


### Backend

1. Run the backend server on another terminal:
   'node index.js'

2. The backend will run on:
   'http://localhost:5001'

### Features

- 'Dashboard View': Displays compliance metrics in the form of bar charts and pie charts.
- 'Hover Tooltips': View detailed values on hovering over the bar chart.
- 'Work Orders': Displays a paginated table with compliance work orders.
- 'Pagination Support': The work orders table supports pagination to manage large datasets.
- 'Data Fetching': Compliance metrics are fetched from the backend server.

### Libraries Used

- **Frontend**:
  - 'React.js': For building the user interface.
  - 'Chart.js': For creating interactive charts.
  - 'Material-UI': For UI components like the table and sidebar.
  - 'Axios': For making HTTP requests to the backend.

- **Backend**:
  - 'Express.js': For handling backend APIs.
  - 'CORS': For enabling cross-origin requests.
  - 'Mock Data': The backend provides mock data for testing.