import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Segment } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import LogoutButton from "../components/LogoutButton";
import { useSelector } from "react-redux";

export default function Navi() {
  const role = useSelector(state=>state.role).user_role
  useEffect(()=>{},[role])
  return (
    <div>
      <Segment inverted>
        <Menu inverted secondary>
        <Link to="/"><Image src="https://icons.iconarchive.com/icons/designbolts/seo/32/Blog-Commenting-icon.png"></Image></Link>
          <Link to=""><Menu.Item name="Anasayfa" /></Link>
          <Link to="/notifications"><Menu.Item name="Bildirimler" /></Link>
          <Link to="/profile"><Menu.Item name="Profil" /></Link>
          {role ==="Author" && 
          <Link to="/post/add"><Menu.Item name="Post Ekle" /></Link>
          }
          {role==="" && <Link to="/login"><Button className="ui button">Giris Yap</Button></Link>}
           {role ==="" &&<Link to="/register"><Button className="ui button">Kayit Ol</Button></Link>}
          {role!=="" && <Link to="/"><LogoutButton></LogoutButton></Link>}
        </Menu>
        
      </Segment>
    </div>
  );
}
