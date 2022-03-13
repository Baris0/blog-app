import React from "react";
import { Container, Form } from "semantic-ui-react";

export default function CreateBlog() {
  return (
    <div>
      <Container>
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid label="Blog Konusu" placeholder="Blog Konusu" />
            <Form.Select fluid label="Kategori" placeholder="..." />
          </Form.Group>
          <Form.Group inline>
            <label></label>
          </Form.Group>
          <Form.TextArea label="" placeholder="..." />
          <Form.Button>Gonder</Form.Button>
        </Form>
      </Container>
    </div>
  );
}
