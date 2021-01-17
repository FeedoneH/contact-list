import { Checkbox } from "antd";
import React from "react";
import "./customCheckbox.scss";

export const CustomCheckbox = ({ label, checked, ...rest }) => {
  return (
    <Checkbox checked={checked} {...rest}>
      {label}
    </Checkbox>
  );
};
