import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartEvent, ActiveElement } from 'chart.js';
import { useNavigate } from 'react-router-dom';
import '../styles/pie.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC<{ complianceByStatus: { completed: number; pending: number; open: number } }> = ({ complianceByStatus }) => {
  const navigate = useNavigate();

  const data = {
    labels: ['Completed', 'Pending', 'Open'],
    datasets: [
      {
        data: [complianceByStatus.completed, complianceByStatus.pending, complianceByStatus.open], // Different data for pie chart
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };

  const options = {
    onClick: (_event: ChartEvent, elements: ActiveElement[]) => {
      if (elements.length > 0) {
        const clickedIndex = elements[0].index!;
        const clickedData = {
          label: data.labels[clickedIndex],
          value: data.datasets[0].data[clickedIndex],
        };

        // Always pass chartData as an array
        navigate('/reports', { state: { chartData: [clickedData] } });
      }
    },
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
