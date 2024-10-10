import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import ComplianceWorkOrders from '../components/ComplianceWorkOrders';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FiMove, FiRefreshCw } from 'react-icons/fi';
import '../styles/dashboard.scss';
import { Tooltip, TextField, Button } from '@mui/material';
import ComplianceBoards from '../components/ComplianceBoard'; 

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard: React.FC = () => {
  const [complianceData, setComplianceData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string>(''); // Store date as a string for input field

  // Function to refresh data
  const refreshDashboardData = (date: string | null = null) => {
    setLoading(true);
    const queryParams = date ? `?date=${date}` : '';

    fetch(`http://localhost:5001/api/compliance${queryParams}`)
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

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Filter data based on selected date (example filters by month or day)
  const getFilteredData = () => {
    if (!complianceData || !selectedDate) {
      return complianceData;
    }
    
    const selectedYear = selectedDate.slice(0, 4); 
    const selectedMonthIndex = new Date(selectedDate).getMonth(); 
    const selectedMonth = monthNames[selectedMonthIndex]; 

    const filteredMonthlyData = complianceData.monthlyData.filter((data: any) => {
      return data.month === selectedMonth;
    });
    
    return { ...complianceData, monthlyData: filteredMonthlyData };
  };

  useEffect(() => {
    refreshDashboardData(); 
  }, []);

  const filteredData = getFilteredData(); 

  if (loading) {
    return (
      <div className="dashboard-loading">
        <Skeleton height={300} width={600} />
        <Skeleton height={300} width={400} />
        <Skeleton height={300} width={800} />
      </div>
    );
  }

  return (
    <div>
      <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', float: 'right',
    marginTop: '-72px', marginRight: '17px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <TextField
            id="date"
            label="Select Start Date"
            type="date"
            value={selectedDate}
            onChange={(e) => {
              const newDate = e.target.value;
              setSelectedDate(newDate);
              refreshDashboardData(newDate); 
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={() => refreshDashboardData(selectedDate)} 
            startIcon={<FiRefreshCw />}
          >
            Refresh Dashboard
          </Button>
        </div>
      </div>
      
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
        {/* Bar Chart */}
        <div key="barChart" data-grid={{ x: 0, y: 0, w: 2, h: 3, minW: 2, minH: 3 }}>
          <div className="widget">
            <Tooltip title="Drag me" placement="top" arrow>
              <span className="widget-handle">
                <FiMove style={{ cursor: 'grab', fontSize: '1.2rem', color: '#666' }} />
              </span>
            </Tooltip>
            <BarChart monthlyData={filteredData?.monthlyData || []} />
          </div>
        </div>

        {/* First Line Chart: Successful Audits */}
        <div key="successfulAudits" data-grid={{ x: 0, y: 3, w: 2, h: 3, minW: 2, minH: 3 }}>
          <div className="widget chart-container">
            <Tooltip title="Drag me" placement="top" arrow>
              <span className="widget-handle">
                <FiMove style={{ cursor: 'grab', fontSize: '1.2rem', color: '#666' }} />
              </span>
            </Tooltip>
            <LineChart auditCompletionData={filteredData?.monthlyData || []} chartTitle="Successful Audits Completion" />
          </div>
        </div>

        {/* Pie Chart */}
        <div key="pieChart" data-grid={{ x: 2, y: 0, w: 2, h: 3, minW: 2, minH: 3 }}>
          <div className="widget">
            <Tooltip title="Drag me" placement="top" arrow>
              <span className="widget-handle">
                <FiMove style={{ cursor: 'grab', fontSize: '1.2rem', color: '#666' }} />
              </span>
            </Tooltip>
            <PieChart complianceByStatus={filteredData?.complianceByStatus || {}} />
          </div>
        </div>

        {/* Second Line Chart: Pending Audits */}
        <div key="pendingAudits" data-grid={{ x: 2, y: 3, w: 2, h: 3, minW: 2, minH: 3 }}>
          <div className="widget chart-container">
            <Tooltip title="Drag me" placement="top" arrow>
              <span className="widget-handle">
                <FiMove style={{ cursor: 'grab', fontSize: '1.2rem', color: '#666' }} />
              </span>
            </Tooltip>
            <LineChart auditCompletionData={filteredData?.monthlyData || []} chartTitle="Pending Audits Overview" pending />
          </div>
        </div>

        {/* Work Orders Table */}
        <div key="workOrders" data-grid={{ x: 0, y: 6, w: 4, h: 5, minW: 4, minH: 3 }}>
          <div className="widget widget-scrollable">
            <Tooltip title="Drag me" placement="top" arrow>
              <span className="widget-handle">
                <FiMove style={{ cursor: 'grab', fontSize: '1.2rem', color: '#666' }} />
              </span>
            </Tooltip>
            <ComplianceWorkOrders workOrders={filteredData?.workOrders || []} />
          </div>
        </div>
      </ResponsiveGridLayout>
      <ComplianceBoards selectedDate={selectedDate} />

    </div>
  );
};

export default Dashboard;
