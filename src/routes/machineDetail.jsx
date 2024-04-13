import { useParams } from "react-router-dom";
import { dataForCamera } from "../cameraData";
import MultiLine from "../staticsComponent/multiChart";
import { useEffect, useState } from "react";
import PieCarbonEmission from "../staticsComponent/pieCarbonEmission";

export default function MachinDetail() {
  let param = useParams().machinName;

  function reRenderor() {
    fetch(`http://127.0.0.1:3000/macineDetail/${param}/data1Min`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMachineData(data);
      });
    fetch(`http://127.0.0.1:3000/macineDetail/${param}/carbon`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCarbonEmission(data);
      });
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
    <div className="w-full h-full py-6 px-8 flex flex-col">
      <div className="flex w-full h-72 justify-between gap-4">
        <div className="w-8/12 border bg-white rounded-xl shadow-sm pl-24">
          {machineData === undefined ? (
            <div></div>
          ) : (
            <MultiLine machinedata={machineData} />
          )}
        </div>
        <div className="w-4/12 border bg-white rounded-xl shadow-sm ">
          <p className="text-md font-semibold mx-4 my-2">CAM</p>
          <img
            className="h-52  w-11/12 mx-auto rounded-md"
            src={`${dataForCamera[param]}`}
          ></img>
          <p className="text-center">cisco ip camera 사용(가정)</p>
        </div>
      </div>
      <div className="w-full flex justify-around gap-4 my-4 h-full">
        <div className=" border pb-8 pt-3 w-full bg-white rounded-xl  shadow-sm h-60">
          <p className="text-sm mx-auto font-semibold  text-start pl-4">
            탄소 발생량
          </p>
          {machineData === undefined ? (
            <div></div>
          ) : (
            <PieCarbonEmission dataset={carbonEmission} />
          )}
        </div>
        <div className="border w-full bg-white rounded-xl shadow-sm">
          <p className="text-md font-semibold mx-4 my-2 ">전력 사용량</p>
        </div>
        <div className=" border w-full bg-white rounded-xl shadow-sm">
          <p className="text-md font-semibold mx-4 my-2">원격 제어</p>
          <div className="flex flex-col w-full gap-5 items-center  mt-5">
            <button className="border w-3/4 rounded-lg  border-black hover:bg-gray-300">
              가동
            </button>
            <button className="border w-3/4 rounded-lg  border-black hover:bg-gray-300">
              가동 중지
            </button>
            <button className="border bg-red-400 w-3/4 rounded-lg  border-black hover:bg-red-600">
              긴급 중지
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
