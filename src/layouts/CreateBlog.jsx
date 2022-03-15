import React from 'react'
import { Form } from 'formik'
import { Button } from 'semantic-ui-react'

export default function CreateBlog() {

    const initialValues = {
        
    }


  return (
    <div>
        <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='baslik' placeholder='Baslik' />
          <Form.Input fluid label='url' placeholder='url' />
          <Form.Select
            fluid
            label='Kategori'
            placeholder=''
          />
        </Form.Group>
       
        <Form.TextArea label='' placeholder='...' />
       
        <Button type='submit' color='green'>Gonder</Button>
      </Form>
    </div>
  )
}
