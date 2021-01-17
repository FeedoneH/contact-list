import React from "react";
import { Input } from "antd";
import "./customTextArea.scss"

export const CustomTextArea = ({ ...rest }) => {
  return <Input.TextArea className="textarea" {...rest} />;
};
