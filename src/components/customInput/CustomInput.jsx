import React from "react";
import "./customInput.scss";
import { Input } from "antd";

export const CustomInput = ({ ...rest }) => {
  return <Input {...rest} className="input" />;
};
