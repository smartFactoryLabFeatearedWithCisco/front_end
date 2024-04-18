import { Link, useParams } from "react-router-dom";
import { dataForCamera } from "../cameraData";
import MultiLine from "../staticsComponent/machineDetail/multiChart";
import { useEffect, useState } from "react";
import PieCarbonEmission from "../staticsComponent/machineDetail/pieCarbonEmission";

export default function Network() {
  let param = useParams().machinName;

  let netWorkCon = [
    {
      Name: "router1",

      image: "./public/router1.png",
      device: "Cisco 7200",

      subnet: "1.150.1.0",
      interface: {
        "0/0": "10.150.1.1",
        "0/1": "10.150.12.1",
        "0/2": "10.150.13.1",
      },
    },
    {
      Name: "router2",
      image: "./public/router.png",
      device: "Cisco 7200",

      subnet: "1.150.2.0",
      interface: {
        "0/0": "10.150.23.2",
        "0/1": "10.150.12.2",
        "0/2": "10.150.2.1",
      },
    },
    {
      Name: "router3",
      image: "./public/router.png",
      device: "Cisco 7200",

      subnet: "1.150.3.0",
      interface: {
        "0/0": "10.150.23.3",
        "0/1": "10.150.13.3",
        "0/2": "10.150.3.1",
      },
    },
    {
      Name: "switch1",
      image: "./public/switch.png",
      device: "Cisco Nexus 9000",
      subnet: "1.150.3.0",
      interface: {
        "0/0": "10.150.23.3",
        "0/1": "10.150.13.3",
        "0/2": "10.150.3.1",
      },
    },
    {
      Name: "switch2",
      image: "./public/switch.png",
      device: "Cisco Nexus 9000",

      subnet: "1.150.3.0",
      interface: {
        "0/0": "10.150.23.3",
        "0/1": "10.150.13.3",
        "0/2": "10.150.3.1",
      },
    },
    {
      Name: "switch3",
      image: "./public/switch.png",
      device: "Cisco Nexus 9000",

      subnet: "1.150.3.0",
      interface: {
        "0/0": "10.150.23.3",
        "0/1": "10.150.13.3",
        "0/2": "10.150.3.1",
      },
    },
  ];
  //추후에 cisco api를 사용해 동적으로 데이터를 받아오고 조종할 수 있도록 할 예정

  const [networkDevice, setnetworkDevice] = useState(netWorkCon[0]);

  return (
    <div className="w-full h-full py-6 px-8 flex flex-col">
      <div className="flex w-full h-80 justify-between gap-4">
        <div className="w-full border bg-white rounded-xl shadow-sm flex">
          <div className="w-4/12 border-r border-gray-300 my-4">
            <img src={`${networkDevice.image}`} className="mt-12 ml-8" />
          </div>
          <div className="w-8/12 ml-8 my-auto">
            <p className="text-lg">호스트 이름: {networkDevice.Name}</p>
            <p className="text-lg">기기 이름: {networkDevice.device}</p>
            <p className="text-lg">ipv4: 255.255.255.255</p>
            <p className="text-lg">서브넷: {networkDevice.subnet}</p>
            <p className="text-lg">
              인터페이스 G0/0:{networkDevice.interface["0/0"]}
            </p>
            <p className="text-lg">
              인터페이스 G0/1:{networkDevice.interface["0/1"]}
            </p>{" "}
            <p className="text-lg">
              인터페이스 G0/2:{networkDevice.interface["0/2"]}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-around gap-4 my-4 h-full">
        {netWorkCon.map((el) => {
          return (
            <div
              onClick={() => {
                setnetworkDevice(el);
              }}
              className="border  w-full bg-white rounded-xl shadow-sm h-44 hover:cursor-pointer flex flex-col justify-between "
            >
              <div className="h-7/12">
                <img className="mt-8" src={`${el.image}`} />
              </div>
              <div className="h-12 pt-2 border-t border-gray-300  bg-slate-200">
                <p className="text-center text-lg">{el.Name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
