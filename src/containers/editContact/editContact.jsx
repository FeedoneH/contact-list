import React, { useContext, useState } from "react";
import { Form } from "../../components/form/Form";
import { ContactsContext } from "../../context/ContactsContext";
import { radio, selectBox, textInput } from "../../utils/Inputs";
import { openNotification } from "../../utils/OpenNotification";

const notificationError = {
  type: "error",
  message: "Contact not updated",
  description: "You do not have any changes in contact.",
  duration: 1,
};
const notificationSuccess = {
  type: "success",
  message: "Contact updated",
  description: "You updated contact successfully.",
  duration: 1,
};
export const EditContact = ({
  match: {
    params: { id },
  },
  location: {
    state: { contact },
  },
  history,
}) => {
  const { editContacts } = useContext(ContactsContext);
  const [fields, setFields] = useState(contact);

  const handleFieldsChange = (name, value) => {
    setFields((v) => ({
      ...v,
      [name]: value,
    }));
  };

  const edit = () => {
    if (checkEquality()) {
      editContacts(fields);
      openNotification(notificationSuccess);
      history.goBack();
    } else openNotification(notificationError);
  };
  const checkEquality = () => {
    if (JSON.stringify(contact) === JSON.stringify(fields)) {
      return false;
    }
    return true;
  };
  return (
    <div>
      <Form
        edit={true}
        inputs={textInput}
        radios={radio}
        selectBox={selectBox}
        handleFieldsChange={handleFieldsChange}
        fields={fields}
        onClick={() => edit()}
      />
    </div>
  );
};
