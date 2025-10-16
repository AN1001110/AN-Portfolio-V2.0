"use client";

import { useEffect, useState } from "react";

export function useScreenDimensions() {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function handleResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}
