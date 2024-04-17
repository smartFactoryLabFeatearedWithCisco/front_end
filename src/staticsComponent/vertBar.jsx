import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function VertBar({ machinedata }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "전력 사용량",
      },
    },
  };

  const labels = Array.from({ length: 60 }, (_, index) => index + 1);

  const data = {
    labels,
    datasets: [
      {
        label: "실시간 전력 사용량",
        data: machinedata.map((item) => item["elec_use"]),
        borderColor: "rgb(225, 237, 21)",
        backgroundColor: "rgba(225, 237, 21,0.5)",
        yAxisID: "y",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
