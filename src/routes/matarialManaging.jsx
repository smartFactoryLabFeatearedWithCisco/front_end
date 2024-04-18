import { useParams } from "react-router-dom";
import { dataForCamera } from "../cameraData";
import MultiLine from "../staticsComponent/machineDetail/multiChart";
import { useEffect, useState } from "react";
import PieCarbonEmission from "../staticsComponent/matarialControl/pieCarbonEmission";

export default function Matarialmanaging() {
  let param = useParams().machinName;
  let electPrice = {
    원자력: { price: 52, carbon: 10 },
    유연탄: { price: 131, carbon: 800 },
    무연탄: { price: 151, carbon: 992 },
    유류: { price: 331, carbon: 782 },
    LNG: { price: 178, carbon: 600 },
    양수: { price: 209, carbon: 570 },
    신재생: { price: 143, carbon: 450 },
    기타: { price: 151, carbon: 320 },
  };
  let aluminumPrice = {
    alcoa: { price: 215, carbon: 12.4 },
    RUSAL: { price: 285, carbon: 7.8 },
    "Rio Tinto": { price: 260, carbon: 8.2 },
    "Norsk Hydro": { price: 320, carbon: 4.6 },
    "Emirates Global Aluminium": { price: 240, carbon: 10.5 },
    "Aluminum Bahrain": { price: 255, carbon: 9.7 },
    "Century Aluminum": { price: 270, carbon: 6.9 },
    Vedanta: { price: 235, carbon: 11.2 },
  };
  let gasPrice = {
    천연가스: { price: 80, carbon: 0.18 },
    프로판: { price: 600, carbon: 0.15 },
    부탄: { price: 550, carbon: 0.16 },
    프로필렌: { price: 90, carbon: 0.17 },
    에탄: { price: 45, carbon: 0.14 },
    수소: { price: 120, carbon: 0 },
    바이오가스: { price: 70, carbon: 0.05 },
    코크스로나가스: { price: 30, carbon: 0.25 },
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
      <div className="flex   justify-between gap-4 h-72">
        <div className="w-1/2 border bg-white rounded-xl shadow-sm pl-2 pt-2 ">
          <p className="text-left text-lg font-semibold">어제의 발전비율</p>
          <PieCarbonEmission />
        </div>
        <div className="w-1/2 border bg-white rounded-xl shadow-sm pl-2 pt-2 ">
          <p className="text-left text-lg font-semibold mb-2">전기 비용 가격</p>
          {Object.keys(electPrice).map((el) => {
            return (
              <div className="flex   hover:cursor-pointer rounded-md justify-around my-auto">
                <p className="text-left w-2/12 border border-black bg-slate-100">
                  {el}
                </p>
                <p className="text-left w-5/12 border border-black">
                  {electPrice[el].price} 원/kWh
                </p>
                <p className="text-left w-5/12 border border-black">
                  {electPrice[el].carbon} g/kWh
                </p>{" "}
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex  justify-around gap-4 my-4  ">
        <div className="w-1/2 border bg-white rounded-xl pl-2 shadow-sm  ">
          <p className="text-left text-lg font-semibold  pt-2">가스 가격</p>
          {Object.keys(gasPrice).map((el) => {
            return (
              <div className="flex   hover:cursor-pointer rounded-md justify-around my-auto">
                <p className="text-left w-4/12 border border-black bg-slate-100">
                  {el}
                </p>
                <p className="text-left w-5/12 border border-black">
                  {gasPrice[el].price} 만원/톤
                </p>
                <p className="text-left w-5/12 border border-black">
                  {gasPrice[el].carbon} 톤/톤
                </p>{" "}
              </div>
            );
          })}
        </div>
        <div className="w-1/2 border bg-white rounded-xl shadow-sm pl-2 pt-2 ">
          <p className="text-left text-lg font-semibold">알루미늄 원물 가격</p>
          {Object.keys(aluminumPrice).map((el) => {
            return (
              <div className="flex   hover:cursor-pointer rounded-md justify-around my-auto">
                <p className="text-left w-4/12 border border-black bg-slate-100">
                  {el}
                </p>
                <p className="text-left w-5/12 border border-black">
                  {aluminumPrice[el].price}만원/톤
                </p>
                <p className="text-left w-5/12 border border-black">
                  {aluminumPrice[el].carbon} 톤/kWh
                </p>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
