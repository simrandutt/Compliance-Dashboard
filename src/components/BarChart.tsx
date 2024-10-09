import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartEvent, ActiveElement } from 'chart.js';
import { useNavigate } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart: React.FC<{ monthlyData: any[] }> = ({ monthlyData }) => {
  const navigate = useNavigate();

  if (!monthlyData || monthlyData.length === 0) {
    return <div>No data available</div>;
  }

  const data = {
    labels: monthlyData.map((item) => item.month),
    datasets: [
      {
        label: 'Completed On Time',
        backgroundColor: '#42A5F5',
        data: monthlyData.map((item) => item.completedOnTime),
      },
      {
        label: 'Completed Overdue',
        backgroundColor: '#FF6384',
        data: monthlyData.map((item) => item.completedOverdue),
      },
      {
        label: 'Still Open',
        backgroundColor: '#FFCE56',
        data: monthlyData.map((item) => item.stillOpen),
      },
    ],
  };

  const options = {
    onClick: (_event: ChartEvent, elements: ActiveElement[]) => {
      if (elements.length > 0) {
        const clickedIndex = elements[0].index!;
        const clickedData = {
          month: monthlyData[clickedIndex].month,
          completedOnTime: monthlyData[clickedIndex].completedOnTime,
          completedOverdue: monthlyData[clickedIndex].completedOverdue,
          stillOpen: monthlyData[clickedIndex].stillOpen,
        };

        const chartDataForReport = [
          { label: 'Completed On Time', value: clickedData.completedOnTime },
          { label: 'Completed Overdue', value: clickedData.completedOverdue },
          { label: 'Still Open', value: clickedData.stillOpen },
        ];

        navigate('/reports', { state: { chartData: chartDataForReport } });
      }
    },
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ maxWidth: '600px', paddingLeft: '15px', paddingTop: '32px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
