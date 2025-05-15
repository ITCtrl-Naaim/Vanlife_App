import { useOutletContext } from "react-router";
import { Van } from "../../../../Vans/Vans";
import "./HostVanInfo.scss"

export default function HostVanInfo() {
  const { van }: Van = useOutletContext();
  return (
    <div className="host-van-info">
      <h3>
        Name: <span>{van.name}</span>
      </h3>
      <h3>
        Category: <span>{van.type}</span>
      </h3>
      <h3>
        Description: <span>{van.description}</span>
      </h3>
      <h3>
        Visibility: <span>Public</span>
      </h3>
    </div>
  );
}
