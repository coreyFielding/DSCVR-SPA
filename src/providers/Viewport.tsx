import React, { useState, useEffect, createContext, useContext } from "react";

export const viewportContext = createContext(undefined);

interface IDevices<T> {
  mobile: T;
  tablet: T;
  [key: string]: T;
}

export const ViewportProvider = ({ children }: any) => {
  const [viewportWidth, setWidth] = useState(window.innerWidth);
  const [devices] = useState<IDevices<number>>({
    mobile: 380,
    tablet: 1030,
  });

  const [device, setDevice] = useState<any>(undefined);

  const getBreakpoint = () => {
    if (viewportWidth < devices["mobile"]) return setDevice("mobile");
    if (viewportWidth < devices["tablet"]) return setDevice("tablet");
    return null;
  };

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    getBreakpoint();
  };

  useEffect(() => {
    getBreakpoint();
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [window.innerWidth]);

  return (
    <viewportContext.Provider value={{ device }}>
      {children}
    </viewportContext.Provider>
  );
};

export const useViewport = () => {
  const { device } = useContext(viewportContext);
  console.log(device);
  return { device };
};
