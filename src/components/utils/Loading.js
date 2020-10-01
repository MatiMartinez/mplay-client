import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="main-loading">
      <div className="loading">
        <div className="bounce-ball"></div>
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
}
