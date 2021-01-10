import React, { useContext, useState } from "react";
import { Modal, Button, Space } from "antd";
import { ContactList } from "../../components/contactList/ContactList";
import { Header } from "../../components/header/Header";
import { ContactsContext } from "../../context/ContactsContext";

export const Contacts = () => {
  const { contacts, deleteContacts } = useContext(ContactsContext);
  const [visible, setVisible] = useState(false);
  const [id, SetId] = useState();

  const [modal, contextHolder] = Modal.useModal();
  const handleModal = (id) => {
    SetId(id);
    setVisible(true);
  };
  const handleDelete = () => {
    deleteContacts(id);
    setVisible(false);
  };
  const showInfoModal = (contact) => {
    let { name, surname, fatherName, gender, additionalInfo } = contact;
    const config = {
      title: "Contact info",
      content: (
        <div>
          <p>Name: {name}</p>
          <p>Surname: {surname}</p>
          <p>Father Name: {fatherName}</p>
          <p>Gender: {gender}</p>
          <p>Additional Information: {additionalInfo}</p>
        </div>
      ),
    };
    return modal.info(config);
  };
  return (
    <div>
      <Header />

      {contextHolder}
      <ContactList
        handleInfo={showInfoModal}
        handleDelete={handleModal}
        contacts={contacts}
      />
      <Modal
        title="Do you want to delete?"
        visible={visible}
        onOk={handleDelete}
        onCancel={() => setVisible(false)}
      >
        <p>If you delete contact, you cannot recover it.</p>
      </Modal>
    </div>
  );
};
