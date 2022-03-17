import React, { useEffect, useState } from "react";
import { Container, Dropdown, Input, Label, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CategoryService from "../services/categoryService";

const Categories = () => {

  const [categorys, setCagorys] = useState([]);

  useEffect(() => {
      let categoryService = new CategoryService();
      categoryService.getCategorys().then((result) => setCagorys(result.data))
  }, [])

  return (
    <div>
      <Container textAlign="left">
        <Menu vertical>
          <Link to="/trends">
          <Menu.Item name="inbox">
            <Label color="teal">1</Label>
            Trendler
          </Menu.Item>
          </Link>
          <Dropdown item text="Kategoriler">
            <Dropdown.Menu>
              {categorys.map((categori) => (
                  <Dropdown.Item key={categori.id}>{categori.name}</Dropdown.Item>
              ))}
              
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            <Input icon="search" placeholder="Konu ara..." />
          </Menu.Item>
        </Menu>
      </Container>
    </div>
  );
};

export default Categories;
