import { useParams } from "react-router-dom";
import { dataForCamera } from "../cameraData";
import MultiLine from "../staticsComponent/machineDetail/multiChart";
import { useEffect, useState } from "react";
import PieCarbonEmission from "../staticsComponent/machineDetail/pieCarbonEmission";

export default function Matarialmanaging() {
  let param = useParams().machinName;

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
        <div className="w-1/2 border bg-white rounded-xl shadow-sm ">
          <p className="text-left text-lg">오늘의 발전비율</p>
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
        <div className="w-1/2 border bg-white rounded-xl shadow-sm ">
          <p className="text-left text-lg">전기 비용 가격</p>
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
      <div className=" flex  justify-around gap-4 my-4 h-full ">
        <div className=" border  w-1/2 bg-white rounded-xl  shadow-sm ">
          <p className="text-left text-lg">가스 가격</p>
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
        <div className="border w-1/2 bg-white rounded-xl shadow-sm">
          <p className="text-left text-lg">알루미늄 원물 가격</p>
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
