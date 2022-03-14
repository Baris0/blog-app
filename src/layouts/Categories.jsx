import React, { useEffect, useState } from "react";
import { Container, Dropdown, Input, Label, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CategoryService from "../services/categoryService";

const Categories = () => {

  const [categorys, setCagorys] = useState([]);

  useEffect(() => {
      let categoryService = new CategoryService();
      categoryService.getCategorys().then((result) => setCagorys(result.data))
  })

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
          <Link to="/newests">
            <Menu.Item name="news">
              <Label>51</Label>
              En yeniler
            </Menu.Item>
            </Link>
          <Link to="/popular"> 
          <Menu.Item name="likes">
            <Label>1</Label>
            En cok begenilenler
          </Menu.Item>
          </Link> 
          <Dropdown item text="Kategoriler">
            <Dropdown.Menu>
              {categorys.map((categori) => (
                  <Dropdown.Item>{categori.name}</Dropdown.Item>
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
