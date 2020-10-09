import React, { useContext } from "react";
import { viewportContext } from "../providers/Viewport";

export const useViewport = () => {
  const { width } = useContext(viewportContext);
  return { width };
};
