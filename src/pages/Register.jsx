import { Form, FormField } from "semantic-ui-react";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { Field } from "formik";
import { ErrorMessage } from "formik";
import { Label } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

export default function Register() {
  const initialValues = {
    email: "",
    name: "",
    password: "",
    phoneNumber: "",
    surname: "",
  };

  const schema = Yup.object({
    email: Yup.string().required("E Mail girmek zorunludur!"),
    name: Yup.string().required("Isim girmek zorunludur!"),
    password: Yup.string().required("Sifre girmek zorunludur!"),
    phoneNumber: Yup.string().required("Telefon numarasi girmek zorunludur!"),
    surname: Yup.string().required("Soyisim girmek zorunludur!"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          axios.post("http://localhost:8080/api/author/register", {
            email: values.email,
            name: values.name,
            password: values.password,
            phoneNumber: values.phoneNumber,
            surname: values.surname,
          });
        }}
      >
        <Form className="ui form">
          <FormField>
            <Field name="name" placeholder="Ad" />
            <ErrorMessage
              name="name"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <Field name="surname" placeholder="surname" />
            <ErrorMessage
              name="surname"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
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
            <Field name="phoneNumber" placeholder="phoneNumber" />
            <ErrorMessage
              name="phoneNumber"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <FormField>
            <Field name="password" placeholder="password" />
            <ErrorMessage
              name="passowrd"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>

          <Button type="submit" color="green">
            Uye Ol
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
