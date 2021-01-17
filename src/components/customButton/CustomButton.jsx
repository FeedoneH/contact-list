import React from "react";
import { Button } from "antd";

export const CustomButton = ({ onClick, label, icon, ...rest }) => {
  return (
    <Button  onClick={onClick} icon={icon} {...rest}>
      {label}
    </Button>
  );
};
