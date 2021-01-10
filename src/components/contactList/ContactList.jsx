import React from "react";
import "./contactList.scss";
import { ContactItem } from "../contactItem/ContactItem";

export const ContactList = ({ contacts, handleDelete, handleInfo }) => {
  return (
    <div className="list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onClickDelete={handleDelete}
          onClickInfo={handleInfo}
        />
      ))}
    </div>
  );
};
