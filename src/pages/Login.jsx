import axios from "axios";
import qs from "qs";
import * as Yup from "yup";
import { Formik } from "formik";
import { Form } from "formik";
import { Button, FormField } from "semantic-ui-react";
import { ErrorMessage } from "formik";
import { Field } from "formik";
import { Label } from "semantic-ui-react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { roleActions } from "../redux/store/role-slice";


 const Login=()=> {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    username: "",
    password: "",
  };

  const [isSuccessLogin, setIsSuccessLogin] = useState(true);

  const schema = Yup.object({
    username: Yup.string().required("Lutfen E mail adresinizi giriniz!"),
    password: Yup.string().required("Lutfen sifrenizi giriniz!"),
  });

  const handleLogin = () => {
    return async (values) => {
      await axios({
        method: "post",
        url: "http://localhost:8080/api/login",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: qs.stringify({
          username: values.username,
          password: values.password,
        }),
      })
        .then((response) => {
          setCookie("access_token", response.data.access_token);
          setCookie("role", response.data.role);
          setIsSuccessLogin(true);
          dispatch(roleActions.setRole(response.data.role))
          navigate("/");
        })
        .catch((res) => { 
          setIsSuccessLogin(false);
        });
    };
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleLogin()}
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
          {!isSuccessLogin && (
            <FormField>
              <div>Girilen bilgiler yanlıs. Ve benim stilim buraya uygun değil.</div>
            </FormField>
          )}
        </Form>
      </Formik>
    </div>
  );
}

export default Login
