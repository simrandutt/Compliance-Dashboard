# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Compliance Dashboard

## Setup Instructions: Use Node version 16+

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

- **Build Tools**:
- Webpack: Bundler for managing dependencies and assets.
- Babel: JavaScript compiler to ensure browser compatibility.

### **Features**

- **Login Page**: Users can log in by entering their username and password. Once authenticated, they are redirected to the main dashboard where compliance metrics are displayed.
  
<img width="1440" alt="Screenshot 2024-10-10 at 2 09 14 PM" src="https://github.com/user-attachments/assets/d2b66e4f-deac-423d-bbfb-64bf12a0316e">

- **Dashboard View**: The dashboard presents an overview of key metrics, organized into charts, tables, and summary tiles. It includes:
  - **Header**: Contains the profile icon, date filter, theme toggle (dark/light mode), and a refresh button.
  - **Left Panel**: A collapsible sidebar with navigation options to different sections of the dashboard (e.g., List View, Reports, Settings).
  - **Interactive Compliance metrics Widgets**: Bar charts, line charts, pie charts, and tables that users can interact with for further insights.
  - **Summary  work orders board**: Fixed board slides that provide an overview of key compliance metrics, like active certifications, pending audits, and critical issues.
<img width="1440" alt="Screenshot 2024-10-10 at 2 10 08 PM" src="https://github.com/user-attachments/assets/e38e3a19-5218-4026-be00-8f506c262a89">

- **Data Fetching**: Widgets and Summary Board are fetched from the backend. The data is dynamically updated based on the selected start date or by clicking the refresh button.

- **Draggable Widgets**: Users can customize the layout by dragging and dropping widgets (such as charts and tables) to desired positions.
<img width="1440" alt="Screenshot 2024-10-10 at 2 11 03 PM" src="https://github.com/user-attachments/assets/b02b88b9-3cc9-4c69-b8f3-a54b5f155ee8">

- **Summary work orders Board**: Fixed slides provide a quick overview of critical compliance metrics like active certifications, pending audits, and critical issues. These slides are always visible for easy reference.
<img width="1440" alt="Screenshot 2024-10-10 at 2 10 24 PM" src="https://github.com/user-attachments/assets/5a5e0be5-459b-4c30-8945-834a1959775b">
- **List View Tab**: Displays a detailed list of compliance tasks and work orders in a searchable table format for easy browsing and analysis.
<img width="1440" alt="Screenshot 2024-10-10 at 2 11 48 PM" src="https://github.com/user-attachments/assets/c6799b90-8aaf-43b0-9b35-4c9687a1957b">

- **Reports Section**: Provides detailed analytics and visual reports on compliance data. Users can dive deeper into specific metrics by clicking on chart elements.
<img width="1440" alt="Screenshot 2024-10-10 at 2 11 57 PM" src="https://github.com/user-attachments/assets/fa7fe850-edc9-42e9-8375-1cee04acdb6f">

- **Settings Page**: Users can configure various dashboard preferences, including refresh intervals, layout customizations, and theme settings.
<img width="1440" alt="Screenshot 2024-10-10 at 2 12 22 PM" src="https://github.com/user-attachments/assets/4e9b63fc-0cd7-42a8-82a3-07bb63dd2d76">

- **Profile Icon and Logout**: Users can manage their profile via the profile icon. The logout option redirects users back to the login page for secure exit.
<img width="1440" alt="Screenshot 2024-10-10 at 2 12 34 PM" src="https://github.com/user-attachments/assets/5350b8e3-c082-413f-a223-ec9c2a848a50">



### **Creativity and Interaction Features**

- **Shimmer Loading Effect**: While data is being fetched, a shimmer effect displays to indicate that the system is working, providing a smooth visual experience.

- **Hover Tooltips**: Users can hover over different parts of the charts to view detailed information. This allows quick access to more in-depth data without needing to leave the current view.
<img width="1267" alt="Screenshot 2024-10-10 at 2 13 16 PM" src="https://github.com/user-attachments/assets/4b25aba7-4b13-4091-a82b-2eafa9f87bb0">
<img width="636" alt="Screenshot 2024-10-10 at 2 13 30 PM" src="https://github.com/user-attachments/assets/0b76fb69-a64b-40ef-b741-1b637402c42b">

- **Drill-down Charts**: Clicking on specific elements in charts ( bars or pie slices colors) navigate users to detailed reports page for deeper analysis, making data exploration more efficient.
<img width="590" alt="Screenshot 2024-10-10 at 2 14 10 PM" src="https://github.com/user-attachments/assets/4f4c6b24-1ca5-43d4-aa59-1eb824a26bc1">
<img width="1440" alt="Screenshot 2024-10-10 at 2 14 48 PM" src="https://github.com/user-attachments/assets/d57f468f-ee55-42e8-9bb8-af44fa6f6b04">

- **Search and Filter in Table Widgets**: In the work orders table, users can search or apply filters to quickly find specific data. This is especially useful when working with large datasets.
<img width="1440" alt="Screenshot 2024-10-10 at 2 15 09 PM" src="https://github.com/user-attachments/assets/f0f5ed70-26fa-4d31-8ebc-a711fc5e6cb5">

- **Pagination in Table**: The work orders table is paginated, allowing users to navigate large datasets without overwhelming the interface.
<img width="1240" alt="Screenshot 2024-10-10 at 2 15 32 PM" src="https://github.com/user-attachments/assets/d6da6aa1-9ba0-4200-9495-84564130505a">

- **Theme Toggle**: A theme toggle button allows users to switch between dark and light modes, improving the overall readability based on personal preference.
<img width="1440" alt="Screenshot 2024-10-10 at 2 15 58 PM" src="https://github.com/user-attachments/assets/3358009a-8c3b-424a-8699-a1d0ecc7890c">

- **Draggable Widgets**: Widgets on the dashboard (like charts and tables) can be dragged, letting users personalize the dashboard layout to suit their needs.
<img width="1440" alt="Screenshot 2024-10-10 at 2 16 55 PM" src="https://github.com/user-attachments/assets/1fe7fc69-dad4-46ec-8e21-5aea36c56b69">

- **Real-time Data Refresh**: A refresh button allows users to manually update the dashboard data, while periodic refreshes ensure that the displayed information is up-to-date.
<img width="547" alt="Screenshot 2024-10-10 at 2 17 12 PM" src="https://github.com/user-attachments/assets/725537e0-0084-42ec-9604-01d26fb87893">

- **Dynamic Alerts Filter**: Color-coded alerts notify users when important metrics, like pending tasks or critical issues, exceed predefined thresholds. Users can click on alerts to filter the charts based on those metrics.
<img width="1320" alt="Screenshot 2024-10-10 at 2 18 25 PM" src="https://github.com/user-attachments/assets/0aae5e5c-e1bd-4bf6-a6c7-05d1c20d5d8e">

- **Start Date Filter**: Users can select a specific start date to view compliance data from that point onward, allowing for focused analysis over time.
<img width="585" alt="Screenshot 2024-10-10 at 2 17 52 PM" src="https://github.com/user-attachments/assets/f40bf69a-2013-4f9b-a7e2-af43315262ee">

- **Scrolling Info Bar Animation**: A scrolling text bar provides important updates like upcoming system maintenance. Hovering over the bar pauses the scrolling, making it easier for users to read the information.
<img width="1421" alt="Screenshot 2024-10-10 at 2 18 49 PM" src="https://github.com/user-attachments/assets/918d4160-4232-4053-954b-ef7926b81022">

- **View Details Pop-up**: Each summary tile has a "View Details" button. Clicking it opens a modal with additional information, giving users the ability to view in-depth data related to that metric.
<img width="512" alt="Screenshot 2024-10-10 at 2 20 43 PM" src="https://github.com/user-attachments/assets/1f43a2ed-fdb6-47a5-a004-f9890dae531a">

<img width="1440" alt="Screenshot 2024-10-10 at 2 20 40 PM" src="https://github.com/user-attachments/assets/bf3aa35c-b70a-4649-9490-40ba71c8b77a">

- **Collapsible Left Panel**: The left sidebar can be expanded or collapsed, giving users more room to focus on the main dashboard content when needed.

<img width="1440" alt="Screenshot 2024-10-10 at 2 20 25 PM" src="https://github.com/user-attachments/assets/5d54d472-c09d-42cb-af1d-bb39a53e4f45">

