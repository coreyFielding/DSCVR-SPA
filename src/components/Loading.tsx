import React from "react";

interface Iloading {
  loading: boolean;
  children: any;
}

const Loading = ({ loading, children }: Iloading) => (
  <>{loading ? <p>loading</p> : { ...children }}</>
);

export default Loading;
