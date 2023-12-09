import { VuesaxLinearElementEqual } from "./VuesaxLinearElementEqual";
import React from "react";

export const ButtonHide = ({
  override,
  property_1,
}) => {
  switch (property_1) {
    case "Group 22":
      return (
        <div className="relative w-20 h-14" style={override}>
          <div className="absolute left-[0%] right-[3.75%] w-[96.25%] top-[0%] bottom-[0%] h-full bg-[rgb(247,_249,_252)]" />
          <VuesaxLinearElementEqual
            override={{
              position: "absolute",
              top: "28.57%",
              left: "33.75%",
              right: "36.25%",
              bottom: "28.57%",
            }}
          />
        </div>
      );
    case "Group 21":
      return (
        <div className="relative w-20 h-14" style={override}>
          <div className="absolute left-[0%] right-[3.75%] w-[96.25%] top-[0%] bottom-[0%] h-full bg-[rgb(247,_249,_252)]" />
          <div className="absolute left-[23.75%] right-[26.25%] w-1/2 top-[14.29%] bottom-[14.29%] h-[71.43%] bg-[rgba(51,_102,_255,_0.2)] rounded-lg" />
          <VuesaxLinearElementEqual
            override={{
              position: "absolute",
              top: "28.57%",
              left: "33.75%",
              right: "36.25%",
              bottom: "28.57%",
            }}
          />
          <div className="absolute left-[0%] right-[96.25%] w-[3.75%] top-[14.29%] bottom-[14.29%] h-[71.43%] bg-[rgb(51,_102,_255)] rounded-[17px]" />
        </div>
      );
    default:
      return null;
  }
};

export default ButtonHide;