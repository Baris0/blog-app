import React from 'react'
import { Form } from 'semantic-ui-react'

export default function Login() {
  return (
    <div>
        <Form>
        <Form.Group widths='equal'>
          <Form.Input type='text' fluid label='Kullanici Adi Veya E posta' placeholder='' />
          <Form.Input type='password' fluid label='Sifre' placeholder='' />
        </Form.Group>
        <Form.Button>Giris</Form.Button>
      </Form>
    </div>
  )
}
