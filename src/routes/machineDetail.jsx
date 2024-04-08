import { useParams } from "react-router-dom";
import { dataForCamera } from "../cameraData";
import MultiLine from "../staticsComponent/multiChart";
import { useEffect, useState } from "react";

export default function MachinDetail() {
  let param = useParams().machinName;
  console.log(param);

  const [machineData, setMachineData] = useState({});

  console.log(dataForCamera[param]);
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/macineDetail/${param}/60`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

        setMachineData(JSON.stringify(data));
      });
  }, []);

  return (
    <div className="w-full h-full py-6 px-8 flex flex-col">
      <div className="flex w-full h-72 justify-between gap-4">
        <div className="w-8/12 border bg-white rounded-xl shadow-sm pl-24">
          {machineData == undefined ? (
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
        <div className=" border w-full bg-white rounded-xl shadow-sm h-60">
          <p className="text-md font-semibold mx-4 my-2">현재 온도</p>
        </div>
        <div className="border w-full bg-white rounded-xl shadow-sm">
          <p className="text-md font-semibold mx-4 my-2">전력 사용량</p>
        </div>
        <div className=" border w-full bg-white rounded-xl shadow-sm">
          <p className="text-md font-semibold mx-4 my-2">암거나</p>
        </div>
      </div>
    </div>
  );
}
