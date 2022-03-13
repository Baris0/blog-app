import React from "react";
import { Form } from 'semantic-ui-react'

export default function Register() {
  return (
    <div>
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid type="text" label="Ad" placeholder="Ad" />
          <Form.Input fluid type="text" label="Soyad" placeholder="Soyad" />
          <Form.Input fluid type="email" label="E Mail" placeholder="E Mail" />
          <Form.Input fluid type="text" label="Kullanici Adi" placeholder="Kullanici Adi" />
          <Form.Input fluid type="password" label="Sifre" placeholder="Sifre" />
        </Form.Group>
        <Form.Checkbox label="Uyelik sozlesmesini okudum kabul ediyorum" />
        <Form.Button>Uye Ol</Form.Button>
      </Form>
    </div>
  );
}
