import { dataForCamera } from "../cameraData";
import { Doughnut } from "react-chartjs-2";
import LinePlot from "../staticsComponent/machineDetail/Lineplot";

export default function Overview() {
  let lint = ["1", "2", "3", "4", "5", "5", "7", "8"];
  return (
    <div className="w-full h-full py-6 px-8 flex flex-col">
      <div className="flex w-full h-72 justify-between gap-4">
        <div className="w-8/12 border bg-white rounded-xl shadow-sm ">
          준비중..
        </div>
        <div className="w-4/12 border bg-white rounded-xl shadow-sm">
          <p className="text-md font-semibold mx-4 my-2">CAM</p>
          <img
            className="h-52 w-11/12 mx-auto rounded-md"
            src={dataForCamera.overView}
          ></img>

          <p className="text-center">cisco ip camera 사용(가정)</p>
        </div>
      </div>
      <div className="w-full flex justify-around gap-4 my-4 h-full">
        <div className=" border w-full bg-white rounded-xl shadow-sm h-60">
          <p className="text-md font-semibold mx-4  my-2">현재 온도</p>
          <LinePlot data={lint} width={400} height={200}></LinePlot>
        </div>
        <div className="border w-full bg-white rounded-xl shadow-sm">
          <p className="text-md font-semibold mx-4 my-2"></p>
        </div>
        <div className=" border w-full bg-white rounded-xl shadow-sm">
          <p className="text-md font-semibold mx-4 my-2">암거나</p>
        </div>
      </div>
    </div>
  );
}
