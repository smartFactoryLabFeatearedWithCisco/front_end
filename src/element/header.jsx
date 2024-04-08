import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full h-20 border-b pt-4 shadow-md flex justify-around">
      <div>
        <Link to="/">
          <img className="w-24" src="/public/logo.png"></img>
        </Link>
      </div>
      <div className="text-2xl font-bold">DASHBOARD</div>
      <div>
        <p className="text-blue-700">지구야 사랑해 공장</p>
        <p>
          홍길동님<span className="text-red-400">(관리자)</span>
        </p>
      </div>
    </div>
  );
}
