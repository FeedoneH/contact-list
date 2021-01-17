import React from "react";
import { Radio } from "antd";
import './customRadio.scss'

export const CustomRadio = ({ options, ...rest }) => {
  return (
    <Radio.Group className="radio" {...rest}>
      {options.map((option) => (
        <Radio className="radio-input" key={option} value={option}>
          {option}
        </Radio>
      ))}
    </Radio.Group>
  );
};
