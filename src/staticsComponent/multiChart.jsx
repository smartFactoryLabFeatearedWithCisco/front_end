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
  Animation,
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
    Animation: {
      onComlete: () => {
        delay = false;
      },
    },
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
    },
  };
  console.log(machinedata);
  const labels = Array.from({ length: 60 }, (_, index) => index + 1);

  const list2 = [
    23, 24, 31, 24, 23, 15, 3, 4, 7, 10, 13, 8, 4, 32, 5, 44, 21, 35, 24, 6, 12,
    34, 20, 15, 8, 12, 8, 12,
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "전력량",
        data: machinedata.map((item) => item["temp(melt)"]),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
        fill: false,
      },
      {
        label: "가스량",
        data: machinedata.map((item) => item["temp(air)"]),

        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
        fill: false,
      },
      {
        label: "가스량",
        data: machinedata.map((item) => item["gas(melt)"]),

        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
        fill: true,
      },
    ],
  };

  return <Line options={options} data={data} updateMode="resize" />;
}
