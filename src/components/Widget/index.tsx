import React from "react";
import { Section } from "./styles";

interface IWidget {
  title: string;
  height: number | string;
  width: number | string;
  children: React.ReactNode[];
}

const Widget = (props: IWidget) => {
  const { title, height, width, children } = props;
  return (
    <Section className={`h-${height} w-${width} shadow-lg rounded-lg p-3`}>
      {title && typeof title === "string" ? <h1>{title}</h1> : null}
      <div>{props.children}</div>
    </Section>
  );
};

export default Widget;
