import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Col, Form, Row } from "antd";
import { v4 } from "uuid";

import "./addContact.scss";
import { radio, selectBox } from "../../utils/Inputs";
import { ContactsContext } from "../../context/ContactsContext";
import { openNotification } from "../../utils/OpenNotification";
import {
  CustomInput,
  CustomTextArea,
  CustomSelect,
  CustomRadio,
  CustomCheckbox,
  CustomButton,
} from "../../components/index";

const notification = {
  type: "success",
  message: "Contact Added!",
  description: "You added new contact successfully.",
  duration: 1,
};

export const AddContact = withRouter(({ history }) => {
  const { addContacts } = useContext(ContactsContext);

  const onFinish = (values) => {
    let newContact = {
      id: v4(),
      ...values,
    };
    addContacts(newContact);
    openNotification(notification);
    history.goBack();
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
    },
  };
  const wrapLayout = {
    labelCol: { span: 15, offset: 0 },
    wrapperCol: {
      span: 7,
      offset: 0,
    },
  };

  return (
    <div className="add-contact">
      <div className="heading-add">
        <h1>Add New Contact</h1>
      </div>
      <Form
        name="basic"
        {...layout}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Surname">
          <Form.Item
            noStyle
            name="surname"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <CustomInput />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Name">
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            name="name"
            noStyle
          >
            <CustomInput />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Father name">
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            name="fatherName"
            noStyle
          >
            <CustomInput />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Additional info">
          <Form.Item
            noStyle
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            name="additionalInfo"
          >
            <CustomTextArea />
          </Form.Item>
        </Form.Item>
        <Row className="new-row" justify="space-between">
          <Col>
            <Form.Item
              name="profession"
              label="Profession"
              {...wrapLayout}
              initialValue={selectBox.options[0].value}
            >
              <CustomSelect options={selectBox.options} />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="Gender"
              initialValue={radio.options[0]}
              name="gender"
            >
              <CustomRadio options={radio.options} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item {...tailLayout} name="getUpdates" valuePropName="checked">
          <CustomCheckbox label="Get updates" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <CustomButton
          
            className="add-btn"
            type="primary"
            htmlType="submit"
            name="submit"
            label="Add"
          />
        </Form.Item>
      </Form>
    </div>
  );
});
