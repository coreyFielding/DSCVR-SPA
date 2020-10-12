import React, { useState, ChangeEvent } from "react";
import { useFetch } from "../../../hooks/redux/useFetch";
import apiClient, { fetchPayload } from "../../../Api/Client";
import { Radio } from "antd";
import withLoading from "../../../components/HOC/withLoading";

const query = (selected: string) => {
  return {
    page: 1,
    limit: 100,
    category: selected,
  };
};

const CategoryGroup = (options: any[], [...args]) => {
  const [value, select] = args;

  return (
    <>
      <Radio.Group
        options={options}
        onChange={(e) => select(e)}
        value={value}
        optionType="button"
      />
    </>
  );
};
const Tiles = (selected: string) => {
  return <div>tiles</div>;
};

const LoadingTiles = (selected: any) =>
  withLoading(Tiles, { type: "tiles", query: query(selected) });

const RenderCategories = () => {
  const options = [
    { label: "Eat", value: "Eat" },
    { label: "Shop", value: "Shop" },
    { label: "Cool", value: "Cool" },
  ];

  const [selected, setSelected] = useState(options[0].label);

  const option = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <>
      {CategoryGroup(options, [selected, option])}
      {LoadingTiles(selected)}
    </>
  );
};

export default RenderCategories;
