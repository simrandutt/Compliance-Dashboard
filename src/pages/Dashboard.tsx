import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout'; 
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import ComplianceWorkOrders from '../components/ComplianceWorkOrders';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 
import { FiMove,FiRefreshCw } from 'react-icons/fi'; 
import '../styles/dashboard.scss'; 
import { Tooltip } from '@mui/material';
import ComplianceBoards from '../components/ComplianceBoard'; // Import the component
const ResponsiveGridLayout = WidthProvider(Responsive); 

const Dashboard: React.FC = () => {
  const [complianceData, setComplianceData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Function to refresh data
  const refreshDashboardData = () => {
    setLoading(true);
    fetch('http://localhost:5001/api/compliance')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data fetched from backend:', data);
        setComplianceData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    refreshDashboardData(); // Fetch data initially
  }, []);

  if (loading) {
    return (
      <div className="dashboard-loading">
        {/* Display shimmer layout */}
        <Skeleton height={300} width={600} />
        <Skeleton height={300} width={400} />
        <Skeleton height={300} width={800} />
      </div>
    );
  }

  return (
    <div>
    <div className="dashboard-header">
      <div className="theme-toggle-container">
        <div className="theme-toggle">
        </div>
        <button
          className="refresh-dashboard-button"
          onClick={refreshDashboardData}
        >
          <FiRefreshCw style={{ marginRight: '8px' }} />
          Refresh Dashboard
        </button>
      </div>
    </div>
      
      <ComplianceBoards />
      
      <ResponsiveGridLayout
        className="layout"
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 4, md: 4, sm: 2, xs: 1, xxs: 1 }}
        rowHeight={100}
        width={1200}
        isDraggable={true}
        draggableHandle=".widget-handle"
        useCSSTransforms={true}
        margin={[20, 20]}
      >
        <div key="barChart" data-grid={{ x: 0, y: 0, w: 2, h: 3, minW: 2, minH: 3 }}>
          <div className="widget">
            <Tooltip title="Drag me" placement="top" arrow>
              <span className="widget-handle">
                <FiMove style={{ cursor: 'grab', fontSize: '1.2rem', color: '#666' }} />
              </span>
            </Tooltip>
            <BarChart monthlyData={complianceData.monthlyData} />
          </div>
        </div>

        <div key="pieChart" data-grid={{ x: 3, y: 3, w: 2, h: 3, minW: 2, minH: 3 }}>
          <div className="widget">
            <Tooltip title="Drag me" placement="top" arrow>
              <span className="widget-handle">
                <FiMove style={{ cursor: 'grab', fontSize: '1.2rem', color: '#666' }} />
              </span>
            </Tooltip>
            <PieChart complianceByStatus={complianceData.complianceByStatus} />
          </div>
        </div>

        <div key="workOrders" data-grid={{ x: 0, y: 6, w: 4, h: 5, minW: 4, minH: 3 }}>
          <div className="widget widget-scrollable">
            <Tooltip title="Drag me" placement="top" arrow>
              <span className="widget-handle">
                <FiMove style={{ cursor: 'grab', fontSize: '1.2rem', color: '#666' }} />
              </span>
            </Tooltip>
            <ComplianceWorkOrders workOrders={complianceData.workOrders} />
          </div>
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default Dashboard;
