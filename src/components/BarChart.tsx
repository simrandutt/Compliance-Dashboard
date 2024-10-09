import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart: React.FC<{ monthlyData: any[] }> = ({ monthlyData }) => {
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
    <div style={{ maxWidth: '600px', margin: '0 auto' }}> {/* Limit chart size */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
