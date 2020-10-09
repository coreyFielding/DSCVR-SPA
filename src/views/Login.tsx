import React, { useState, useContext, useEffect } from "react";
import { Link, withRouter, useLocation } from "react-router-dom";
import Form from "../components/Form";
import { Group, Error } from "../components/FormGroup";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Form as AntForm } from "antd";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FormProvider, FormContext } from "../components/Form/FormProvider";
import { connect, useDispatch } from "react-redux";
import { LOGIN } from "../redux/actions/auth";
import { RootState } from "../redux/reducers";
import history from "../helpers/history";
import { Tabs } from "antd";

const { TabPane } = Tabs;
const initialValues = {
  username: "",
  password: "",
};

const inputEl = (props: any) => {
  const { type, error, handleChange } = props;
  return type === "text" ? (
    <AntForm.Item required className="m-0">
      <Input
        placeholder="Enter username"
        name="username"
        onChange={handleChange}
        className={error ? "border-red-600" : ""}
      />
    </AntForm.Item>
  ) : (
    <AntForm.Item required className="m-0">
      <Input.Password
        placeholder="Enter password"
        type="password"
        name="password"
        iconRender={(visible: any) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        onChange={handleChange}
        className={error ? "border-red-600" : ""}
      />
    </AntForm.Item>
  );
};

const RenderLoginForm = () => {
  const [invalidForm, setInvalid] = useState(null);
  const formDetails = useContext(FormContext);
  const dispatch = useDispatch();
  const schema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const { handleChange, values, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: () => {},
  });

  const handleSubmit = () => {
    return validateOnSubmit()
      ? setInvalid("Invalid values")
      : dispatch(LOGIN(values));
  };

  const validateOnSubmit = () => {
    return Object.values(values).includes("") || !!Object.keys(errors).length;
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="flex justify-center items-center flex-col bg-white sm:w-full md:w-full lg:w-1/5 h-auto shadow-lg rounded-lg p-2">
        <div className="lg:w-3/4 flex items-center justify-center mb-4">
          <h4 className="text-xl">DSCVR</h4>
        </div>
        <Tabs className="flex items-center">
          <TabPane tab="Sign in" key="1">
            <Form
              handleSubmit={handleSubmit}
              action="Login"
              error={invalidForm}
            >
              <Group label="Username">
                {inputEl({
                  type: "text",
                  handleChange,
                  value: values.username,
                  error: errors.username,
                })}
                {errors.username && <Error error={errors.username} />}
              </Group>
              <Group label="Password">
                {inputEl({
                  type: "password",
                  handleChange,
                  value: values.password,
                  errors: errors.password,
                })}
                {errors.password && <Error error={errors.password} />}
              </Group>
            </Form>
          </TabPane>
          <TabPane tab="Sign up" key="2">
            test
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

const Login: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    const user = localStorage.getItem("token");

    if (user && location.pathname === "/login") history.push("/");

    console.log(location);
  }, [location]);
  return (
    <FormProvider initialVals={initialValues}>
      <RenderLoginForm />
    </FormProvider>
  );
};

const mapStateToProps = (state: RootState) => ({
  auth: state.auth.user || null,
});

export default withRouter(connect(mapStateToProps, null)(Login));
