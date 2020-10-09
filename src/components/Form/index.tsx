import React, { useState } from "react";
import { Submit } from "./formStyles";
import { Form as AntForm, Space } from "antd";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Form = ({
  handleSubmit,
  action,
  error,
  clear = false,
  children,
}: any) => {
  const [form] = AntForm.useForm();
  return (
    <AntForm form={form} onFinish={handleSubmit} className="m-3 w-full">
      <Space direction="vertical" className="h-full">
        <>{children}</>
        <div className="flex justify-between">
          <Submit type="primary" htmlType="submit" className="rounded m-1">
            {action}
          </Submit>
          {clear ? (
            <Submit type="default" htmlType="submit" className="rounded m-1">
              Clear
            </Submit>
          ) : null}
        </div>

        {error && (
          <div className="flex bg-red-500 text-white rounded">
            <AiOutlineExclamationCircle className="m-2 lg:ml-3 xl:ml-5" />
            <p className="leading-8 ml-6">{error}</p>
          </div>
        )}
      </Space>
    </AntForm>
  );
};

export default Form;
