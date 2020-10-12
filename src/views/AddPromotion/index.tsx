import React, { useState, useContext, useEffect, createContext } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFetch } from "../../hooks/redux/useFetch";
import { Input, Row, Col } from "antd";
import Select from "../../components/Select/index";
import Form from "../../components/Form/index";
import { Group, styles } from "../../components/FormGroup";
import {
  FormProvider,
  FormContext,
  FormDispatchContext,
} from "../../components/Form/FormProvider";
import { UserProvider } from "../../components/App";
import * as Yup from "yup";
import { useFormik, Formik } from "formik";
import { FETCH_DATA } from "../../redux/actions/generic";
import RenderCategories from "../AddPromotion/components/Categories";
const { TextArea } = Input;
const { StyledInput } = styles;

const initialValues = {
  title: "",
  tagline: "",
  description: "",
};

const DataProvider = createContext(null);

const RenderAddForm: React.FC = () => {
  const { user } = useContext(UserProvider);
  console.log(user);
  const { tribes } = useContext(DataProvider);
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
              {tribes ? <Select items={tribes!.items} /> : null}
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
        <Col span={6}>{RenderCategories()}</Col>
      </Form>
    </Row>
  );
};

const AddPromotion: React.FC = ({ history }: any) => {
  const { data: tribes } = useFetch({ type: "tribes", query: { limit: 100 } });
  const fetched = {
    tribes,
  };
  return (
    <DataProvider.Provider value={fetched}>
      <FormProvider initialVals={initialValues}>
        <RenderAddForm />
      </FormProvider>
    </DataProvider.Provider>
  );
};

export default withRouter(AddPromotion);
