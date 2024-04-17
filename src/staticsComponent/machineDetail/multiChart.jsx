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
  const colorPallete = [
    { r: 225, g: 21, b: 21 },
    { r: 35, g: 21, b: 225 },
    { r: 21, g: 225, b: 28 },
    { r: 21, g: 218, b: 225 },
    { r: 221, g: 21, b: 225 },
    { r: 225, g: 137, b: 21 },
  ];
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
        label: "내부 온도, Celcius",
        data: machinedata.map((item) => item["temp(melt)"]),
        borderColor: "rgb(225, 21, 21)",
        backgroundColor: "rgba(225, 21, 21, 0.5)",
        yAxisID: "y",
        fill: false,
      },

      {
        label: "대기 온도,Celcius",
        data: machinedata.map((item) => item["temp(air)"]),

        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
        fill: true,
      },
      {
        label: "가스 배출량, g",
        data: machinedata.map((item) => item["gas(melt)"]),

        borderColor: "rgb(21, 218, 225)",
        backgroundColor: "rgba(21, 218, 225, 0.5)",
        yAxisID: "y1",
        fill: true,
      },
      {
        label: "가스 사용량,g",
        data: machinedata.map((item) => item["gas_use"]),

        borderColor: "rgb(221, 21, 225)",
        backgroundColor: "rgba(221, 21, 225, 0.5)",
        yAxisID: "y1",
        fill: true,
      },
      // {
      //   label: "전력 사용량, KW/h",
      //   data: machinedata.map((item) => item["elec_use"]),

      //   borderColor: "rgb(225, 237, 21)",
      //   backgroundColor: "rgba(225, 237, 21, 0.5)",
      //   yAxisID: "y1",
      //   fill: true,
      // },
    ],
  };

  return <Line options={options} data={data} updateMode="resize" />;
}
