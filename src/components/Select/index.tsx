import React, { useState, useContext, useEffect } from "react";
import { StyledSelect } from "./styles";
import { Select as SelectAI } from "antd";
const { Option } = SelectAI;

interface IItem {
  name: string;
}

const RenderItems = (items: IItem[]) => {
  return items.map((item, index) => (
    <Option key={index} value={item.name}>
      {item.name}
    </Option>
  ));
};

const Select = ({ items }: any) => {
  return <StyledSelect>{RenderItems(items)}</StyledSelect>;
};

export default Select;
