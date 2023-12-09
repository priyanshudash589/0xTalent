import React from "react";
import Frame_16 from "../componentsDashboard/Frame_16.jsx";

const Dashboard = () => (
  <div
    style={{
      backgroundColor: "#ffff",
      // "rgb(33, 33, 35)",
      color: "#fafafa",
      height: "fit-content",
      minHeight: "100vh",
      width: "fit-content",
      minWidth: "100vw",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }}
  >
    {/* Vivid-generated components */}
    <Frame_16 override={{ resize: "both", overflow: "hidden" }} />
  </div>
);

export default Dashboard
