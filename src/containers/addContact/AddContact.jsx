import React, { useContext, useState } from "react";
import { radio, selectBox, textInput } from "../../utils/Inputs";
import { Form } from "../../components/form/Form";
import { ContactsContext } from "../../context/ContactsContext";
import { v4 } from "uuid";
import { withRouter } from "react-router-dom";
import { openNotification } from "../../utils/OpenNotification";

const notification = {
  type: "success",
  message: "Contact Added!",
  description: "You added new contact successfully.",
  duration: 1,
};
export const AddContact = withRouter(({ history }) => {
  const { addContacts } = useContext(ContactsContext);
  const [fields, setFields] = useState({
    name: "",
    surname: "",
    fatherName: "",
    additionalInfo: "",
    gender: "",
    profession: selectBox.options[0].value,
    getUpdate: false,
  });
  const [error, setError] = useState("");

  const validation = () => {
    let keys = Object.keys(fields);
    for (const key of keys) {
      if (typeof fields[key] === "string" && fields[key].trim() === "") {
        setError("Write your data correctly.");
        return false;
      }
    }
    return true;
  };
  const add = () => {
    let newContact = {
      id: v4(),
      ...fields,
    };
    if (validation()) {
      addContacts(newContact);
      openNotification(notification);
      history.goBack();
    }
  };

  const handleFieldsChange = (name, value) => {
    setFields((v) => ({
      ...v,
      [name]: value,
    }));
  };
  return (
    <div>
      <Form
        selectBox={selectBox}
        fields={fields}
        inputs={textInput}
        radios={radio}
        error={error}
        handleFieldsChange={handleFieldsChange}
        onClick={() => {
          add();
        }}
      />
    </div>
  );
});
