import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineChartProps {
  auditCompletionData: any[]; // Change the prop name
  chartTitle: string;
  pending?: boolean;
}

const LineChart: React.FC<LineChartProps> = ({ auditCompletionData, chartTitle, pending = false }) => {
  const data = {
    labels: auditCompletionData.map((item) => item.month), // Now uses auditCompletionData
    datasets: [
      {
        label: chartTitle,
        data: pending ? auditCompletionData.map((item) => item.stillOpen) : auditCompletionData.map((item) => item.completedOnTime),
        borderColor: pending ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)',
        backgroundColor: pending ? 'rgba(255, 99, 132, 0.2)' : 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  return <Line data={data} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />;
};

export default LineChart;
