import { useParams } from "react-router-dom";

export default function Analying() {
  let param = useParams();
  return <>{param.analType}</>;
}
