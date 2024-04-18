import { Link, useParams } from "react-router-dom";
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
        <div className="w-4/12 border bg-white rounded-xl shadow-sm pl-4 ">
          <p className="text-md font-semibold  my-2">esg 관련 속보</p>
          <Link to="https://www.donga.com/news/Economy/article/all/20240319/124044877/1">
            <p className="hover:bg-slate-200 rounded-md my-2">
              “몰려오는 ESG 수출규제.…경쟁 차별화 기회 삼아야”
            </p>
          </Link>
          <Link to="https://www.dailian.co.kr/news/view/1322917">
            <p className="hover:bg-slate-200 rounded-md my-2">
              "마스턴운용-EY컨설팅, ESG 공시 트렌드 조망 워크숍 진행"
            </p>
          </Link>
          <Link to="https://www.impacton.net/news/articleView.html?idxno=10751">
            <p className="hover:bg-slate-200 rounded-md my-2">
              "임박한 EU CBAM 보고에 비상등 켜진 기업…무역협회, 핵심실무 가이드
              제공 "
            </p>
          </Link>
          <Link to="https://www.news1.kr/articles/?5362552">
            <p className="hover:bg-slate-200 rounded-md my-2">
              "CBAM에 공급망 실사까지 ESG 무역장벽 확대…수출기업 대응은 '34점' "
            </p>
          </Link>
          <Link to="https://www.steeldaily.co.kr/news/articleView.html?idxno=182262">
            <p className="hover:bg-slate-200 rounded-md my-2">
              "포스코플로우, EU CBAM 대응 방안 모색 세미나 개최"
            </p>
          </Link>
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
