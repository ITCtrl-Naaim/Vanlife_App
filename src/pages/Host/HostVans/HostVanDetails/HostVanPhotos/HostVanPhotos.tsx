import { useOutletContext } from "react-router";
import "./HostVanPhotos.scss";

export default function HostVanPhotos() {
  const { van } = useOutletContext();
  return (
    <div className="host-van-photos">
      <img src={van.imageURL} alt={`${van.name} van's image`} />
    </div>
  );
}
