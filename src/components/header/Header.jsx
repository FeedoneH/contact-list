import React from "react";
import "./header.scss";

import { withRouter } from "react-router-dom";
import { add } from "../../assets/ICONS/ICONS";
import { CustomButton } from "../customButton/CustomButton";

export const Header = withRouter(({ history }) => {
  return (
    <div className="header">
      <h1 className="header__name"> Contacts List</h1>
      <CustomButton
        type="primary"
        style={{
          background: "rgb(146, 26, 161)",
          outline: "none",
          border: "none",
        }}
        onClick={() => history.push("/contacts/new")}
        size="middle"
        icon={add}
        label="     Add New Contact "
      />
    </div>
  );
});
