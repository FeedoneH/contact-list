import React, { useContext, useState } from "react";
import { Form } from "antd";
import { withRouter } from "react-router-dom";
import "./editContact.scss";

import { ContactsContext } from "../../context/ContactsContext";
import { radio, selectBox } from "../../utils/Inputs";
import { openNotification } from "../../utils/OpenNotification";
import {
  CustomInput,
  CustomTextArea,
  CustomSelect,
  CustomRadio,
  CustomCheckbox,
  CustomButton,
} from "../../components/index";

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
const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 14,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 7,
  },
};
const wrapLayout = {
  labelCol: {
    span: 7,
    offset: 0,
  },
  wrapperCol: {
    span: 7,
    offset: 0,
  },
};

export const EditContact = withRouter(
  ({
    match: {
      params: { id },
    },
    location: {
      state: { contact },
    },
    history,
  }) => {
    const { editContacts } = useContext(ContactsContext);
    const {
      name,
      surname,
      fatherName,
      gender,
      profession,
      additionalInfo,
      getUpdates,
    } = contact;
    const [checkUpdate, setCheckUpdate] = useState(getUpdates);

    const onFinish = (values) => {
      const { id } = contact;

      if (JSON.stringify(contact) !== JSON.stringify({ id, ...values })) {
        let updatedContact = { id, ...values };
        editContacts(updatedContact);
        openNotification(notificationSuccess);
        history.goBack();
      } else {
        openNotification(notificationError);
      }
    };
    const onFinishFailed = (errorInfo) => {
      console.log(errorInfo);
    };

    const oncheck = (e) => {
      setCheckUpdate(e.target.checked);
    };

    return (
      <div>
        <div className="heading-edit">
          <h1>Edit Contact</h1>
        </div>
        <Form
          className="edit-form"
          name="basic"
          {...layout}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Surname">
            <Form.Item noStyle name="surname" initialValue={surname}>
              <CustomInput />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Name">
            <Form.Item name="name" initialValue={name} noStyle>
              <CustomInput />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Father name">
            <Form.Item name="fatherName" initialValue={fatherName} noStyle>
              <CustomInput />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Additional info">
            <Form.Item
              noStyle
              initialValue={additionalInfo}
              name="additionalInfo"
            >
              <CustomTextArea />
            </Form.Item>
          </Form.Item>

          <Form.Item
            name="profession"
            label="Profession"
            {...wrapLayout}
            initialValue={profession}
          >
            <CustomSelect options={selectBox.options} />
          </Form.Item>
          <Form.Item label="Gender" initialValue={gender} name="gender">
            <CustomRadio options={radio.options} />
          </Form.Item>
          <Form.Item
            name="getUpdates"
            valuePropName="checked"
            initialValue={checkUpdate}
            {...tailLayout}
          >
            <CustomCheckbox
              checked={checkUpdate}
              onChange={oncheck}
              label="Get updates about information"
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 7 }}>
            <CustomButton
              className="edit-btn"
              type="primary"
              htmlType="submit"
              name="submit"
              label="Edit Contact"
            />
          </Form.Item>
        </Form>
      </div>
    );
  }
);
