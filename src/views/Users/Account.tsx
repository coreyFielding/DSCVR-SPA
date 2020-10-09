import React, { useState, useContext, useEffect } from "react";
import Form from "../../components/Form";
import { Group, styles } from "../../components/FormGroup";
import {
  FormProvider,
  FormContext,
  FormDispatchContext,
} from "../../components/Form/FormProvider";
import * as Yup from "yup";
import { useFormik, Formik } from "formik";
import { Input, Row, Col } from "antd";

const initialValues = {
  name: "",
  tagline: "",
  description: "",
};

const RenderAccountForm = () => {
  const formDetails = useContext(FormContext);
  const setFormDetails = useContext(FormDispatchContext);

  const schema = Yup.object({
    title: Yup.string().required("Required"),
    tagline: Yup.string(),
  });

  const { handleChange, values, errors } = useFormik({
    initialValues: { ...formDetails },
    validationSchema: schema,
    onSubmit: (values: any) => {
      handleSave();
    },
  });

  const handleSave = () => {
    setFormDetails({
      values,
    });
  };

  return (
    <Form
      handleSave={handleSave}
      formValues={formDetails}
      initialValues={initialValues}
      schema={schema}
      action="Save"
      clear={true}
    ></Form>
  );
};

const Account: React.FC = () => {
  return (
    <FormProvider initialVals={initialValues}>
      <RenderAccountForm />
    </FormProvider>
  );
};

export default Account;
