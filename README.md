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
- **Tooltips**: Added tooltip for drag icon.
resize oard, borad, view detail popup,added webpack support. slide  tiles in board.

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

**UI Features and Interactions**

- **Dashboard Light Mode**
<img width="1440" alt="Screenshot 2024-10-09 at 2 29 22 PM" src="https://github.com/user-attachments/assets/c2130054-8cfb-4460-9ff5-70c5c04e73e4">

- **Dark Mode Theme**
  
<img width="1440" alt="Screenshot 2024-10-09 at 2 29 29 PM" src="https://github.com/user-attachments/assets/bb685109-4d5a-4249-89df-a54ee8c9599e">

- **List View**
<img width="1355" alt="Screenshot 2024-10-09 at 2 20 27 PM" src="https://github.com/user-attachments/assets/de7c0038-7742-4c43-b910-45bb48b7bddc">

- **Reports contains chart dynamic data**
<img width="1354" alt="Screenshot 2024-10-09 at 2 20 22 PM" src="https://github.com/user-attachments/assets/b5b44c20-769e-40bb-b994-bdba07e5983e">

- **Settings**
<img width="1359" alt="Screenshot 2024-10-09 at 2 20 18 PM" src="https://github.com/user-attachments/assets/3b7210c5-4bf0-4388-b0a4-2ea9bb697948">

- **Profile and Logout**
<img width="946" alt="Screenshot 2024-10-09 at 2 20 06 PM" src="https://github.com/user-attachments/assets/e0906e2c-9653-45a6-8045-5dc695968176">

- **Drag and Drop Feature for widgets - Drag Icon on right**
<img width="1358" alt="Screenshot 2024-10-09 at 2 22 04 PM" src="https://github.com/user-attachments/assets/d257171c-a4c0-4956-9859-2a8617588ff3">

<img width="1232" alt="Screenshot 2024-10-09 at 2 04 43 PM" src="https://github.com/user-attachments/assets/e5164f20-fdae-4d30-bbe0-e5fff1d2f849">

- 
- **Drill Down filter in Pie Chart by deselection specific status**
  <img width="616" alt="Screenshot 2024-10-09 at 2 21 49 PM" src="https://github.com/user-attachments/assets/b6780b43-1f42-437e-86a0-da412ab80b20">

<img width="584" alt="Screenshot 2024-10-09 at 2 21 44 PM" src="https://github.com/user-attachments/assets/fe6800a4-bee2-476a-9d22-0a7bc2638305">
  
- **Drill Down filter Bar Chart  by deselection specific status**

<img width="560" alt="Screenshot 2024-10-09 at 2 04 46 PM" src="https://github.com/user-attachments/assets/8fd66b82-a031-485c-b19a-2379852508a0">
<img width="663" alt="Screenshot 2024-10-09 at 2 04 26 PM" src="https://github.com/user-attachments/assets/59765bb6-af79-44f4-a6c4-45e202f96108">

  
- **Collapse/Expand left panel**
<img width="756" alt="Screenshot 2024-10-09 at 2 20 35 PM" src="https://github.com/user-attachments/assets/5509bf15-2d14-4290-83ec-b43239c9fbf5">

- **Table Search Bar**
<img width="1345" alt="Screenshot 2024-10-09 at 2 11 40 PM" src="https://github.com/user-attachments/assets/12710bea-c1ab-4c72-88ba-d96dcc19a294">

<img width="1289" alt="Screenshot 2024-10-09 at 2 05 01 PM" src="https://github.com/user-attachments/assets/523c00ba-eeff-40d4-ae81-3f011490e07f">

- **Table Pagination**

<img width="1070" alt="Screenshot 2024-10-09 at 2 22 26 PM" src="https://github.com/user-attachments/assets/2cd76a16-df5e-4294-8d86-5a33d9c73205">

  
- **On click on bar chart, it will navigate to Reports Page with data interaction.**

<img width="1359" alt="Screenshot 2024-10-09 at 2 22 15 PM" src="https://github.com/user-attachments/assets/592bb760-3502-48c1-8b27-f9aca1bfa8ab">
<img width="1360" alt="Screenshot 2024-10-09 at 2 22 12 PM" src="https://github.com/user-attachments/assets/a3f35d96-cfda-46f4-993f-421bd4a2521c">

-**On click of Pie Chart, it will navigate to Reports page with data**
<img width="1351" alt="Screenshot 2024-10-09 at 2 05 16 PM" src="https://github.com/user-attachments/assets/92f61e06-a25e-4e66-8b71-fa2f9c41c1a1">

-** Shimmer UI or loader, when no data from server, Once data loads the new UI**
<img width="1257" alt="Screenshot 2024-10-09 at 2 48 33 PM" src="https://github.com/user-attachments/assets/04a2075b-6b4f-40d0-9c05-d2ea08baf7ad">



