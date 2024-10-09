import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../styles/pie.scss';
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC<{ complianceScore: string }> = ({ complianceScore }) => {
  const data = {
    labels: ['Completed', 'Pending', 'Open'],
    datasets: [
      {
        data: [85, 12, 3],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="chart-containers">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
