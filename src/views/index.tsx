import React from "react";
import Header from "../Layout/Header/index";
import { useViewport } from "../providers/Viewport";

const View = ({ component, title }: any) => {
  const { device } = useViewport();

  const Component = component;
  return (
    <>
      <Header
        title={title}
        titlePos={device === "mobile" ? "center" : "left"}
      />
      <Component />
    </>
  );
};

export default View;
