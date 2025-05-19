import { useOutletContext } from "react-router";
import { Van } from "@/types/van";
import "./HostVanPricing.scss";

export default function HostVanPricing() {
  const { van } = useOutletContext<{ van: Van }>();
  return (
    <div className="host-van-pricing">
      <span className="price" data-period="/day">
        ${van.price}.00
      </span>
    </div>
  );
}
