import { useOutletContext } from "react-router";
import { Van } from "@/types/van";
import "./HostVanPhotos.scss";

export default function HostVanPhotos() {
  const { van } = useOutletContext<{ van: Van }>();
  return (
    <div className="host-van-photos">
      <img src={van.imageURL} alt={`${van.name} van's image`} />
    </div>
  );
}
