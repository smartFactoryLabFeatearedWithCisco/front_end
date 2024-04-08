import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function MultiLine({ machinedata }) {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "시간당 전력 소비량",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
      y2: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
      y3: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  console.log(machinedata);
  const labels = Array.from({ length: 60 }, (_, index) => index + 1);
  const list = [
    14, 2, 23, 12, 32, 46, 4, 1, 2, 3, 15, 2, 3, 52, 1, 4, 2, 5, 12, 6, 12, 34,
    2, 3, 2, 21, 1, 1,
  ];
  const list2 = [
    23, 24, 31, 24, 23, 15, 3, 4, 7, 10, 13, 8, 4, 32, 5, 44, 21, 35, 24, 6, 12,
    34, 20, 15, 8, 12, 8, 12,
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "전력량",
        data: list.map((item) => item),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "가스량",
        data: list2.map((item) => item),

        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
