import { BarLoader } from "react-spinners";
import "./loadingPage.css";

function LoadingPage() {
  return (
    <div className="loading-page">
      <BarLoader className="loading-spinner" color="#8693ab" />
      <p className="loading-text">Loading ...</p>
    </div>
  );
}

export default LoadingPage;
