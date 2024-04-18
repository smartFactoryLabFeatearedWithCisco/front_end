import { useParams } from "react-router-dom";
import { dataForCamera } from "../cameraData";
import MultiLine from "../staticsComponent/machineDetail/multiChart";
import { useEffect, useState } from "react";
import PieCarbonEmission from "../staticsComponent/machineDetail/pieCarbonEmission";

export default function Matarialmanaging() {
  let param = useParams().machinName;
  let electPrice = {
    원자력: 52,
    유연탄: 131,
    무연탄: 151,
    유류: 331,
    LNG: 178,
    양수: 209,
    신재생: 143,
    기타: 147,
  };

  function reRenderor() {
    // fetch(`http://127.0.0.1:3000/macineDetail/${param}/data1Min`, {
    //   method: "GET",
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setMachineData(data);
    //   });
    // fetch(`http://127.0.0.1:3000/macineDetail/${param}/carbon`, {
    //   method: "GET",
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setCarbonEmission(data);
    //   });
  }

  const [machineData, setMachineData] = useState([]);
  const [carbonEmission, setCarbonEmission] = useState({});

  console.log(dataForCamera[param]);
  useEffect(() => {
    const interval = setInterval(() => {
      reRenderor();
    }, 1000);
    return () => clearInterval(interval);
  }, [machineData]);

  return (
    <div className="w-full h-full py-6 px-8 flex flex-col ">
      <div className="flex   justify-between gap-4 h-full">
        <div className="w-1/2 border bg-white rounded-xl shadow-sm pl-2 pt-2 ">
          <p className="text-left text-lg font-semibold">오늘의 발전비율</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
        </div>
        <div className="w-1/2 border bg-white rounded-xl shadow-sm pl-2 pt-2 ">
          <p className="text-left text-lg font-semibold mb-2">전기 비용 가격</p>
          {Object.keys(electPrice).map((el) => {
            return (
              <p className="pl-2 hover:bg-gray-300 hover:cursor-pointer rounded-md">
                <span className="font-semibold">{el}</span> :{electPrice[el]}{" "}
                원/kWh
              </p>
            );
          })}
        </div>
      </div>
      <div className=" flex  justify-around gap-4 my-4 h-full ">
        <div className="w-1/2 border bg-white rounded-xl shadow-sm pl-2 pt-2 ">
          <p className="text-left text-lg font-semibold">가스 가격</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
        </div>
        <div className="w-1/2 border bg-white rounded-xl shadow-sm pl-2 pt-2 ">
          <p className="text-left text-lg font-semibold">알루미늄 원물 가격</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
          <p>ssss</p>
        </div>
      </div>
    </div>
  );
}
