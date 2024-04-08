import { Outlet } from "react-router-dom";
import Header from "../element/header";
import LeftPart from "../element/leftPart";

export default function Root() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="flex  bg-gray-50">
        <LeftPart />
        <Outlet />
      </div>
    </div>
  );
}
