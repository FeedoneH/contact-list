import React from "react";
import { Button, Input, Radio, Select } from "antd";
import "./form.scss";
import Checkbox from "antd/lib/checkbox/Checkbox";
export const Form = ({
  edit,
  inputs,
  radios,
  selectBox,
  name,
  handleFieldsChange,
  fields,
  onClick,
  error,
  ...rest
}) => {
  const { Option } = Select;
  let { additionalInfo, gender, profession, getUpdate } = fields;
  return (
    <div className="form">
      <h2>{edit ? "Edit Contact" : "Add New Contact"}</h2>
      {inputs?.length ? (
        inputs.map((input) => (
          <Input
            value={fields[input.name]}
            key={input.name}
            name={input.name}
            placeholder={input.placeholder}
            onChange={(e) => handleFieldsChange(input.name, e.target.value)}
          />
        ))
      ) : (
        <Input
          {...rest}
          onChange={(e) => handleFieldsChange(name, e.target.value)}
        />
      )}

      <Input.TextArea
        placeholder="Additional information"
        value={additionalInfo}
        name="additionalInfo"
        onChange={(e) => handleFieldsChange("additionalInfo", e.target.value)}
      />
      <div className="input-row">
        <Select
          value={profession}
          onSelect={(v) => {
            handleFieldsChange(selectBox.name, v);
          }}
          style={{ width: 120 }}
        >
          {selectBox.options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>

        <Radio.Group
          value={gender}
          name={radios.name}
          onChange={(e) => handleFieldsChange(radios.name, e.target.value)}
        >
          {radios.options.map((option) => (
            <Radio key={option} value={option}>
              {option}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <Checkbox
        className="checkbox"
        name="getUpdate"
        checked={getUpdate}
        onChange={(e) => handleFieldsChange("getUpdate", e.target.checked)}
      >
        Get notificatons about updates.
      </Checkbox>
      <p>{error}</p>
      <Button type="primary" onClick={() => onClick()}>
        {edit ? "Edit" : "Create"} Contact
      </Button>
    </div>
  );
};
