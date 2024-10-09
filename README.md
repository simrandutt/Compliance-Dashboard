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


### Features
- **Dashboard View**: Displays compliance metrics using bar charts and pie charts with hover tooltips for detailed values.
- **Hover Tooltips**: View detailed values by hovering over the bar chart.
- **Work Orders**: Displays a paginated table with compliance work orders, including details such as work order ID, start date, due date, and status.
- **Pagination Support**: The work orders table supports pagination, allowing users to navigate through large datasets.
- **Data Fetching**: Compliance metrics and work orders are fetched from the backend server.
- **Theme Toggle**: Users can switch between light and dark modes for the dashboard.
- **Draggable Widgets**: Dashboard widgets, including charts and tables, are draggable and resizable for a customizable layout.
- **Shimmer UI**: Displays a loading shimmer effect while fetching compliance data.
- **Dynamic Alerts**: Implements color-coded alerts that notify users when key metrics, like "Pending Tasks," exceed certain thresholds.
- **Real-time Updates**: Simulates real-time data updates by refreshing compliance metrics and tasks every few minutes.
- **Filter/Search Options**: Allows users to filter or search the displayed data for specific metrics.
- **Drill-down Charts**: Clicking on a chart element drills down into more detailed information or opens additional charts.

### Libraries Used
- **Frontend**:

- React.js: For building the user interface.
- Chart.js: For creating interactive charts.
- Material-UI: For UI components like tables and sidebars.
- Axios: For making HTTP requests to the backend.

- **Backend**:

- Express.js: For handling backend APIs.
- CORS: For enabling cross-origin requests.
- Mock Data: The backend provides mock data for testing.