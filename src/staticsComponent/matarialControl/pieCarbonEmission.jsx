import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieCarbonEmission() {
  const gasData = [];
  let totalGasEmission = 0;

  const data = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  data.labels.push("전력(석유발전)");
  data.datasets[0].data.push(2);
  data.labels.push("가스 소모");
  data.datasets[0].data.push(3);
  data.labels.push("알루미늄 괴");
  data.datasets[0].data.push(3);

  return (
    <div className="flex h-60 ml-40 justify-between pl-8 ">
      <Pie data={data} />
      <div className="w-3/12 flex flex-col justify-end mr-8 mb-4 ">
        <button className="text-lg border border-black rounded-lg">
          상세보기
        </button>
      </div>
    </div>
  );
}
