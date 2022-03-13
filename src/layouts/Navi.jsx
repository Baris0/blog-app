import React from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Segment } from "semantic-ui-react";
import { Image } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Segment inverted>
        <Menu inverted secondary>
        <Link to="/"><Image src="https://icons.iconarchive.com/icons/designbolts/seo/32/Blog-Commenting-icon.png"></Image></Link>
          <Link to=""><Menu.Item name="Anasayfa" /></Link>
          <Link to="/notifications"><Menu.Item name="Bildirimler" /></Link>
          <Link to="/profile"><Menu.Item name="Profil" /></Link>
          <Link to="/login"><Button className="ui button">Giris Yap</Button></Link>
          <Link to="/register"><Button className="ui button">Kayit Ol</Button></Link>
        </Menu>
      </Segment>
    </div>
  );
}
