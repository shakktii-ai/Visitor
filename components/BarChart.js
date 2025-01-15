import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

// Register the chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales in 2024',
        data: [65, 59, 80, 81, 56],
        backgroundColor: '#4CAF50',
        borderColor: '#388E3C',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-xs mx-auto p-6 bg-white rounded-lg shadow-md">
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
