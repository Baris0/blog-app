import axios from "axios";
import qs from "qs";
import * as Yup from "yup";
import { Formik } from "formik";
import { Form } from "formik";
import { Button, FormField } from "semantic-ui-react";
import { ErrorMessage } from "formik";
import { Field } from "formik";
import { Label } from "semantic-ui-react";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const schema = Yup.object({
    email: Yup.string().required(""),
    password: Yup.string().required(""),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          axios({
            method: "post",
            url: "http://localhost:8080/api/login",
            data: qs.stringify({
              email: values.email,
              password: values.password,
            }),
          });
        }}
      >
        <Form className="ui form">
          <FormField>
            <Field name="email" placeholder="email" />
            <ErrorMessage
              name="email"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <Field name="password" placeholder="password" />
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
