import React, { Fragment } from 'react'
import { Button } from 'semantic-ui-react'
import {  useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
const LogoutButton = () => {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([])
    const handleLogout =()=>{
        removeCookie("access_token");
        removeCookie("role")
    }
  return (
    <Fragment>
        <Button onClick={handleLogout} className='ui button'>Çıkış Yap</Button>
    </Fragment>
  )
}

export default LogoutButton