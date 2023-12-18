import React from "react";
import "./Component.css";

const LoadingSpinner = () => {
  return (
    <>
      <div className="fullscreen-spinner text-primary">
        <div className="spinner-border" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
