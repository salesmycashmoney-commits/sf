import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Transactions',
      data: [120, 190, 170, 210, 250],
      backgroundColor: '#0ea5e9',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Monthly Transactions' },
  },
};

export const ChartWidget: React.FC = () => (
  <div className="bg-white p-4 rounded shadow">
    <Bar data={data} options={options} />
  </div>
);
