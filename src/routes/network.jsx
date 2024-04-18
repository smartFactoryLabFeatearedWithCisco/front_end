import { Link, useParams } from "react-router-dom";
import { dataForCamera } from "../cameraData";
import MultiLine from "../staticsComponent/machineDetail/multiChart";
import { useEffect, useState } from "react";
import PieCarbonEmission from "../staticsComponent/machineDetail/pieCarbonEmission";

export default function Network() {
  let param = useParams().machinName;

  // function reRenderor() {
  //   fetch(`http://127.0.0.1:3000/macineDetail/${param}/data1Min`, {
  //     method: "GET",
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setMachineData(data);
  //     });
  //   fetch(`http://127.0.0.1:3000/macineDetail/${param}/carbon`, {
  //     method: "GET",
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setCarbonEmission(data);
  //     });
  // }

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
      <div className="flex w-full h-80 justify-between gap-4">
        <div className="w-full border bg-white rounded-xl shadow-sm flex">
          <div className="w-4/12 border-r border-gray-300 my-4">
            <img src="./public/router.png" className="mt-12 ml-8" />
          </div>
          <div className="w-8/12 ml-8 my-auto">
            <p className="text-lg">호스트 이름: 안농</p>
            <p className="text-lg">기기 이름: 카탈리나</p>
            <p className="text-lg">ipv4: 255.255.255.255</p>
            <p className="text-lg">호스트 이름: 안농</p>
            <p className="text-lg">호스트 이름: 안농</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-around gap-4 my-4 h-full">
        <div className="border  w-full bg-white rounded-xl shadow-sm h-44 hover:cursor-pointer flex flex-col justify-between ">
          <div className="h-7/12">
            <img className="mt-8" src="./public/router1.png" />
          </div>
          <div className="h-12 pt-2 border-t border-gray-300  bg-slate-200">
            <Link to="http://10.150.1.2">
              <p className="text-center text-lg">switch-1</p>
            </Link>
          </div>
        </div>
        <div className="border  w-full bg-white rounded-xl shadow-sm h-44 hover:cursor-pointer flex flex-col justify-between ">
          <div className="h-7/12">
            <img className="mt-8" src="./public/router1.png" />
          </div>
          <div className="h-12 pt-2 border-t border-gray-300  bg-slate-200">
            <Link to="http://10.150.2.2">
              <p className="text-center text-lg">switch-1</p>
            </Link>
          </div>
        </div>
        <div className="border  w-full bg-white rounded-xl shadow-sm h-44 hover:cursor-pointer flex flex-col justify-between ">
          <div className="h-7/12">
            <img className="mt-8" src="./public/router1.png" />
          </div>
          <div className="h-12 pt-2 border-t border-gray-300  bg-slate-200">
            <Link to="http://10.150.3.2">
              <p className="text-center text-lg">Router-1</p>
            </Link>
          </div>
        </div>
        <div className="border  w-full bg-white rounded-xl shadow-sm h-44 hover:cursor-pointer flex flex-col justify-between ">
          <div className="h-7/12">
            <img className="mt-8" src="./public/router1.png" />
          </div>
          <div className="h-12 pt-2 border-t border-gray-300  bg-slate-200 ">
            <p className="text-center text-lg">Router-1</p>
          </div>
        </div>
        <div className="border  w-full bg-white rounded-xl shadow-sm h-44 hover:cursor-pointer flex flex-col justify-between ">
          <div className="h-7/12">
            <img className="mt-8" src="./public/router1.png" />
          </div>
          <div className="h-12 pt-2 border-t border-gray-300  bg-slate-200">
            <p className="text-center text-lg">Router-1</p>
          </div>
        </div>
        <div className="border  w-full bg-white rounded-xl shadow-sm h-44 hover:cursor-pointer flex flex-col justify-between ">
          <div className="h-7/12">
            <img className="mt-8" src="./public/router1.png" />
          </div>
          <div className="h-12 pt-2 border-t border-gray-300  bg-slate-200">
            <p className="text-center text-lg">Router-1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
