import vanGIF from "@/assets/images/vanGIF.gif";
import "./LoadingUI.scss";

export default function LoadingUI() {
  return (
    <div className="loading-ui">
      <h2>Loading...</h2>
      <img src={vanGIF} alt="" />
    </div>
  );
}
