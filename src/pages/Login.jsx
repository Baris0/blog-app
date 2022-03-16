import axios from "axios";
import qs from "qs";
import * as Yup from "yup";
import { Formik } from "formik";
import { Form } from "formik";
import { Button, FormField } from "semantic-ui-react";
import { ErrorMessage } from "formik";
import { Field } from "formik";
import { Label } from "semantic-ui-react";
import {  useCookies } from "react-cookie";

export default function Login() {

  const [cookies, setCookie, removeCookie] = useCookies([])

  const initialValues = {
    username: "",
    password: "",
  };

  const schema = Yup.object({
    username: Yup.string().required("Lutfen E mail adresinizi giriniz!"),
    password: Yup.string().required("Lutfen sifrenizi giriniz!"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={async(values) => {
            await axios({
            method: "post",
            url: "http://localhost:8080/api/login",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({
              username: values.username,
              password: values.password,
            }),
          }).then((response)  =>{
             setCookie("access_token", response.data.access_token)
             setCookie("role",response.data.role)
           });
          console.log(cookies)
        }}
      >
        <Form className="ui form">
          <FormField>
            <Field name="username" placeholder="email" />
            <ErrorMessage
              name="username"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage
              name="password"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <Button type="submit" color="green">
            Giris
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
