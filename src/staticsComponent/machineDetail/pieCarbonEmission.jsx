import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieCarbonEmission({ dataset }) {
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

  if (dataset?.["temp(melt)"] !== undefined) {
    const dataEmit = dataset?.["temp(melt)"].toFixed(2);
    data.labels.push("내부 온도");
    data.datasets[0].data.push(dataEmit);
    gasData.push({
      Name: "내부 온도",
      data: dataEmit,
    });
    totalGasEmission += Number(dataEmit);
  }
  if (dataset?.["temp(air)"] !== undefined) {
    const dataEmit = dataset?.["temp(air)"].toFixed(2);
    data.labels.push("외부 온도");
    data.datasets[0].data.push(dataEmit);
    gasData.push({
      Name: "외부 온도",
      data: dataEmit,
    });
    totalGasEmission += Number(dataEmit);
  }
  if (dataset?.["gas(melt)"] !== undefined) {
    const dataEmit = dataset?.["gas(melt)"].toFixed(2);
    data.labels.push("가스 배출량");
    data.datasets[0].data.push(dataEmit);
    gasData.push({
      Name: "가스 배출량",
      data: dataEmit,
    });
    totalGasEmission += Number(dataEmit);
  }
  if (dataset?.["gas_use"] !== undefined) {
    const dataEmit = dataset?.["gas_use"].toFixed(2);
    data.labels.push("가스 사용량");
    data.datasets[0].data.push(dataEmit);
    gasData.push({
      Name: "가스 사용량",
      data: dataEmit,
    });
    totalGasEmission += Number(dataEmit);
  }
  if (dataset?.["elec_use"] !== undefined) {
    const dataEmit = dataset?.["elec_use"].toFixed(2);
    data.labels.push("전력(석유발전)");
    data.datasets[0].data.push(dataEmit);
    gasData.push({
      Name: "전력(석유발전)",
      data: dataEmit,
    });
    totalGasEmission += Number(dataEmit);
  }
  return (
    <div className="flex h-full justify-between pl-8 ">
      <div className=" flex flex-col w-40 justify-center gap-3 rounded-lg border border-b ">
        {gasData.map((el) => {
          return (
            <p className="text-sm">
              <span className="font-bold">{el.Name}</span>:{el.data}
            </p>
          );
        })}
        <p className="text-sm">
          <span className="font-bold">총 가스 발생량</span>:{totalGasEmission}
          g/h
        </p>
      </div>
      <Pie data={data} />
    </div>
  );
}
