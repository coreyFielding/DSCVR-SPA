import React, { useState, useContext, useEffect } from "react";
import { Input, Row, Col } from "antd";
import Select from "../../components/Select/index";
import Form from "../../components/Form/index";
import { Group, styles } from "../../components/FormGroup";
import {
  FormProvider,
  FormContext,
  FormDispatchContext,
} from "../../components/Form/FormProvider";
import * as Yup from "yup";
import { useFormik, Formik } from "formik";

const { TextArea } = Input;
const { StyledInput } = styles;

const initialValues = {
  title: "",
  tagline: "",
  description: "",
};

const RenderAddForm: React.FC = () => {
  const formDetails = useContext(FormContext);
  const setFormDetails = useContext(FormDispatchContext);

  const schema = Yup.object({
    title: Yup.string().required("Required"),
    tagline: Yup.string(),
  });

  const { handleChange, touched, values, errors } = useFormik({
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
    <Row className="w-90 h-full m-1 bg-white">
      <Form
        handleSave={handleSave}
        formValues={formDetails}
        initialValues={initialValues}
        schema={schema}
        action="Save"
        clear={true}
      >
        <Col span={8} className="border">
          <Group label="Your business">
            <span>name</span>
          </Group>
          <h2 className="text-xl">Promotion details</h2>
          <div className="flex justify-between">
            <Group label="Outlet locations" width="32">
              <Select items={[{ name: "test" }]} />
            </Group>
            <Group label="Offer applies to" width="32">
              <Select items={[{ name: "test" }]} />
            </Group>
          </div>
          <Group label="Title" display="inline">
            <StyledInput
              name="title"
              onChange={handleChange}
              className={`w-48 ${errors.title ? "border-red-600" : ""}`}
            />
            {errors.title ? (
              <div className="w-full">
                <p className="text-red-600">{errors.title}</p>
              </div>
            ) : null}
          </Group>
          <Group label="Tagline" display="inline">
            <StyledInput
              name="tagline"
              onChange={handleChange}
              className="w-48"
            />
          </Group>
          <Group label="Description">
            <TextArea rows={4} name="description" onChange={handleChange} />
          </Group>
          <Group label="Terms">
            <TextArea rows={4} name="terms" onChange={handleChange} />
          </Group>
          <Group label="Code" display="inline">
            <StyledInput
              name="code"
              onChange={handleChange}
              className={`w-40 ${errors.code ? "border-red-600" : ""}`}
            />
            {errors.code ? (
              <div className="w-full">
                <p className="text-red-600">{errors.code}</p>
              </div>
            ) : null}
          </Group>
        </Col>
        <Col span={6}>test</Col>
      </Form>
    </Row>
  );
};

const AddPromotion: React.FC = () => {
  return (
    <FormProvider initialVals={initialValues}>
      <RenderAddForm />
    </FormProvider>
  );
};

export default AddPromotion;
