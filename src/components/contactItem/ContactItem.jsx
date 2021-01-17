import React from "react";
import { withRouter } from "react-router-dom";
import { edit, info, trash } from "../../assets/ICONS/ICONS";
import { CustomButton } from "../customButton/CustomButton";
import "./contactItem.scss";

export const ContactItem = withRouter(
  ({ contact, history, onClickDelete, onClickInfo }) => {
    let { name, surname, fatherName, profession, id, getUpdates } = contact;
    
    let style = {
      width: "25%",
      border: 'none'
    };

    return (
      <div className="contact-item row">
        <div className="contact row">
          <p className="contact__name">
            {surname} {name} {fatherName}
          </p>
          <p className="contact__profession">{profession} </p>
        </div>
        <div className="buttons row">
          <CustomButton
          icon={info}
            type="primary"
            style={{...style, background: '#27dd27'}}
            className="buttons__info"
            onClick={() => onClickInfo(contact)}
          />

          <CustomButton
            style={{...style, bacckground:" #4545f5"}}
            icon={edit}
            type="primary"
            className="buttons__edit"
            onClick={() => {
              history.push(`/contacts/edit/${id}`, { contact });
            }}
          />

          <CustomButton
            type="primary"
            icon={trash}
            style={{...style, background:" #f54545"}}
            className="buttons__delete"
            onClick={() => onClickDelete(id)}
          />
        </div>
      </div>
    );
  }
);
