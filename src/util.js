import { useEffect } from "react";

export const useEvent = (event, handler, passive = false) => {
  useEffect(() => {
    // initiate the event handler
    window.addEventListener(event, handler, passive);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener(event, handler);
    };
  });
};

export const getColors = (num) => {
  switch (num) {
    case 2:
      return "#B8C3C9";
    case 4:
      return "#788397";
    case 8:
      return "#909DE1";
    case 16:
      return "#6678D1";
    case 32:
      return "#4FA298";
    case 64:
      return "#1D9B8C";
    case 128:
      return "#479ECF";
    case 256:
      return "#1197E3";
    case 512:
      return "#01A7F1";
    case 1024:
      return "#E8BB31";
    case 2048:
      return "#E7B723";
    default:
      return "#2A2C39";
  }
};
