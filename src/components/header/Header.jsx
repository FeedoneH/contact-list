import React from "react";
import "./header.scss";
import "antd/dist/antd.css";
import { Button } from "antd";
import { withRouter } from "react-router-dom";
import { add } from "../../assets/ICONS/ICONS";

export const Header = withRouter(({ history }) => {
  return (
    <div className="header">
      <h1 className="header__name"> Contacts List</h1>
      <Button
        type="primary"
        style={{background: 'rgb(146, 26, 161)', outline:'none', border: 'none'}}
        onClick={() => history.push("/contacts/new")}
        size="middle"
        icon={add}
      >
        Add New Contact 
      </Button>
    </div>
  );
});
