import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend } from 'chart.js';

// Register the chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend);

const CombinedChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        type: 'line',
        label: 'Profit',
        data: [35, 40, 70, 60, 75],
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66, 165, 245, 0.1)',
        tension: 0.4,
      },
      {
        type: 'bar',
        label: 'Sales',
        data: [40, 45, 60, 50, 70],
        backgroundColor: '#66BB6A',
      },
    ],
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <Bar data={data} />
    </div>
  );
};

export default CombinedChart;
