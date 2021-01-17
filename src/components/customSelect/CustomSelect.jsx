import React from "react";
import { Select } from "antd";
import "./customSelect.scss";

export const CustomSelect = ({ options, ...rest }) => {
  const { Option } = Select;
  return (
    <Select {...rest} style={{ width: 120 }}>
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};
