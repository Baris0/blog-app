import axios from "axios";
import React, { Component } from "react";
import { Form } from "semantic-ui-react";

export default class Login extends Component{

handleSubmit = e => {
  e.preventDefault();

  const data = {
    email: this.username,
    password: this.password
  }

  axios.post("http://localhost:8080/api/login", data)
    .then(result => {
      localStorage.setItem('token', result.data.token)
    })

    .catch((error) => {
      console.log(error)
    })
}
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              type="email"
              fluid
              label="Kullanici Adi Veya E posta"
              placeholder=""
            />
            <Form.Input type="password" fluid label="Sifre" placeholder="" />
          </Form.Group>
          <Form.Button>Giris</Form.Button>
        </Form>
      </div>
    );
  }
}
