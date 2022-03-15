import React, { Component } from "react";
import { Form } from 'semantic-ui-react'
import axios from "axios";

export default class Register extends Component {

  handleSubmit = r => {
    r.preventDefault();

    const data = {
      email: this.email,
      name: this.name,
      password: this.password,
      phoneNumber: this.phoneNumber,
      surname: this.surname
    }
    axios.post("http://localhost:8080/api/author/register", {
      email: data.email,
      name: data.name,
      password: data.password,
      phoneNumber: data.phoneNumber,
      surname: data.surname
    })

  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid type="text" label="Ad" placeholder="Ad" />
            <Form.Input fluid type="text" label="Soyad" placeholder="Soyad" />
            <Form.Input fluid type="email" label="E Mail" placeholder="E Mail" />
            <Form.Input fluid type="phone number" label="Telefon" placeholder="Telefon" />
            <Form.Input fluid type="password" label="Sifre" placeholder="Sifre" />
          </Form.Group>
          <Form.Checkbox label="Uyelik sozlesmesini okudum kabul ediyorum" />
          <Form.Button>Uye Ol</Form.Button>
        </Form>
      </div>
    );
  }

}
