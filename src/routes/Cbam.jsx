import { useParams } from "react-router-dom";
import { dataForCamera } from "../cameraData";
import MultiLine from "../staticsComponent/machineDetail/multiChart";
import { useEffect, useState } from "react";
import PieCarbonEmission from "../staticsComponent/machineDetail/pieCarbonEmission";

export default function CBAM() {
  let param = useParams().machinName;

  function reRenderor() {}

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
        <div className="w-8/12 border pt-3 bg-white rounded-xl shadow-sm ">
          <p className="text-md  mx-auto font-semibold  text-start pl-4">
            총 탄소 배출량
          </p>
        </div>
        <div className="w-4/12 border bg-white rounded-xl shadow-sm ">
          <p className="text-md font-semibold mx-4 my-2">esg 관련 속보</p>
        </div>
      </div>
      <div className="w-full flex justify-around gap-4 my-4 h-full">
        <div className=" border pb-8 pt-3 w-full bg-white rounded-xl  shadow-sm h-60">
          <p className="text-md mx-auto font-semibold  text-start pl-4">
            직접 탄소 발생량
          </p>
        </div>
        <div className="border w-full bg-white rounded-xl shadow-sm">
          <p className="text-md font-semibold mx-4 my-2 ">전구물 탄소 배출량</p>
        </div>
        <div className=" border w-full bg-white rounded-xl shadow-sm">
          <p className="text-md font-semibold mx-4 my-2">간접 탄소 배출량</p>
        </div>
      </div>
    </div>
  );
}
