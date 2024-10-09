import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout'; 
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import ComplianceWorkOrders from '../components/ComplianceWorkOrders';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 
import { FiMove } from 'react-icons/fi'; 
import '../styles/dashboard.scss'; 

const ResponsiveGridLayout = WidthProvider(Responsive); 

const Dashboard: React.FC = () => {
  const [complianceData, setComplianceData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        {/* Bar Chart Widget */}
        <div key="barChart" data-grid={{ x: 0, y: 0, w: 2, h: 3, minW: 2, minH: 3 }}>
          <div className="widget">
            <span className="widget-handle">
              <FiMove style={{ cursor: 'grab', fontSize: '1.2rem', color: '#666' }} />
            </span>
            <BarChart monthlyData={complianceData.monthlyData} />
          </div>
        </div>

        {/* Pie Chart Widget */}
        <div key="pieChart" data-grid={{ x: 0, y: 3, w: 2, h: 2, minW: 2, minH: 3 }}>
          <div className="widget">
            <span className="widget-handle">
              <FiMove style={{ cursor: 'grab', fontSize: '1.2rem', color: '#666' }} />
            </span>
            <PieChart complianceScore={complianceData.complianceScore} />
          </div>
        </div>

        {/* Work Orders Table Widget */}
        <div key="workOrders" data-grid={{ x: 0, y: 6, w: 4, h: 5, minW: 4, minH: 4 }}>
          <div className="widget">
            <span className="widget-handle">
              <FiMove style={{ cursor: 'grab', fontSize: '1.2rem', color: '#666' }} />
            </span>
            <ComplianceWorkOrders workOrders={complianceData.workOrders} />
          </div>
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default Dashboard;
