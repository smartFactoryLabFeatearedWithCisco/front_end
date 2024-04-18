import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function LeftPart() {
  const [isClicked, setIsClicked] = useState("overView");
  return (
    <div className="rounded-xl bg-white my-4 h-full mx-4 border shadow-sm  w-2/12 flex flex-col px-4 py-12 gap-4">
      <div>
        <Link to="/overView">
          <p
            className={`text-lg font-bold hover:cursor-pointer ${
              isClicked === "overView" ? "bg-gray-300" : ""
            } hover:text-lg  rounded-lg `}
            onClick={() => {
              setIsClicked("overView");
            }}
          >
            개요
          </p>
        </Link>
      </div>
      <div>
        <p className="text-lg font-bold mb-4">개별 관리</p>
        <div className="pl-2 gap-4">
          <Link to="/machineDetail/meltingM">
            <p
              className={`text-md hover:cursor-pointer ${
                isClicked === "meltingM" ? "bg-gray-300" : ""
              } hover:text-lg  rounded-lg font-semibold`}
              onClick={() => {
                setIsClicked("meltingM");
              }}
            >
              용해로
            </p>
          </Link>
          <Link to="/machineDetail/holdingM">
            <p
              className={`text-md hover:cursor-pointer ${
                isClicked === "holdingM" ? "bg-gray-300" : ""
              } hover:text-lg text-md rounded-lg font-semibold `}
              onClick={() => {
                setIsClicked("holdingM");
              }}
            >
              유지로
            </p>
          </Link>
          <Link to="/machineDetail/deGassingM">
            <p
              className={`text-md hover:cursor-pointer ${
                isClicked === "deGassingM" ? "bg-gray-300" : ""
              } text-md hover:text-lg  rounded-lg font-semibold`}
              onClick={() => {
                setIsClicked("deGassingM");
              }}
            >
              탈가스 필터
            </p>
          </Link>
          <Link to="/machineDetail/slabCastingM">
            <p
              className={`text-md hover:cursor-pointer ${
                isClicked === "slabCastingM" ? "bg-gray-300" : ""
              } text-md hover:text-lg  rounded-lg font-semibold`}
              onClick={() => {
                setIsClicked("slabCastingM");
              }}
            >
              주조기
            </p>
          </Link>
          <Link to="/machineDetail/coldMillingM">
            <p
              className={`text-md hover:cursor-pointer ${
                isClicked === "coldMillingM" ? "bg-gray-300" : ""
              } text-md hover:text-lg rounded-lg font-semibold`}
              onClick={() => {
                setIsClicked("coldMillingM");
              }}
            >
              냉간 압연기
            </p>
          </Link>
          <Link to="/machineDetail/tensionLevelingM">
            <p
              className={`text-md hover:cursor-pointer ${
                isClicked === "tensionLevelingM" ? "bg-gray-300" : ""
              } text-md hover:text-lg  rounded-lg font-semibold`}
              onClick={() => {
                setIsClicked("tensionLevelingM");
              }}
            >
              교정기
            </p>
          </Link>
          <Link
            to="/machineDetail/cuttingWidthM"
            className="font-semibold text-md hover:text-lg hover:cursor-pointer  hover:bg-gray-100 rounded-lg"
          >
            <p
              className={`text-md hover:cursor-pointer ${
                isClicked === "cuttingWidthM" ? "bg-gray-300" : ""
              } text-md hover:text-lg  rounded-lg font-semibold`}
              onClick={() => {
                setIsClicked("cuttingWidthM");
              }}
            >
              폭 절단기
            </p>
          </Link>
          <Link
            to="/machineDetail/cuttingHeightM"
            className="font-semibold text-md hover:text-lg hover:cursor-pointer  hover:bg-gray-100 rounded-lg"
          >
            <p
              className={`text-md hover:cursor-pointer ${
                isClicked === "cuttingHeightM" ? "bg-gray-300" : ""
              } text-md hover:text-lg  rounded-lg font-semibold`}
              onClick={() => {
                setIsClicked("cuttingHeightM");
              }}
            >
              길이 절단기
            </p>
          </Link>
          <Link
            to="/machineDetail/annellingM"
            className="font-semibold text-md hover:text-lg hover:cursor-pointer  hover:bg-gray-100 rounded-lg"
          >
            <p
              className={`text-md hover:cursor-pointer ${
                isClicked === "annellingM" ? "bg-gray-300" : ""
              } text-md hover:text-lg  rounded-lg font-semibold`}
              onClick={() => {
                setIsClicked("annellingM");
              }}
            >
              소둔로
            </p>
          </Link>
        </div>
      </div>
      <p className="text-lg font-bold ">관리자</p>
      <div className="pl-2 gap-4">
        <Link to="/network">
          <p
            className={`text-md hover:cursor-pointer ${
              isClicked === "network" ? "bg-gray-300" : ""
            } text-md hover:text-lg  rounded-lg font-semibold`}
            onClick={() => {
              setIsClicked("network");
            }}
          >
            네트워크
          </p>
        </Link>
        <Link to="/CBAM">
          <p
            className={`text-md hover:cursor-pointer ${
              isClicked === "CBAM" ? "bg-gray-300" : ""
            } text-md hover:text-lg  rounded-lg font-semibold`}
            onClick={() => {
              setIsClicked("CBAM");
            }}
          >
            CBAM
          </p>
        </Link>
        <Link to="/matarialmanaging">
          <p
            className={`text-md hover:cursor-pointer ${
              isClicked === "prePrice" ? "bg-gray-300" : ""
            } text-md hover:text-lg  rounded-lg font-semibold`}
            onClick={() => {
              setIsClicked("prePrice");
            }}
          >
            자원 관리
          </p>
        </Link>
      </div>
    </div>
  );
}
