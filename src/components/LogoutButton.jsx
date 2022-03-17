import React, { Fragment } from 'react'
import { Button } from 'semantic-ui-react'
import {  useCookies } from "react-cookie";
import { useDispatch } from 'react-redux';
import { roleActions } from '../redux/store/role-slice';

const LogoutButton = () => {
  const dispatch = useDispatch();
    const [cookies, setCookie, removeCookie] = useCookies([])
    const handleLogout =()=>{
        removeCookie("access_token");
        removeCookie("role")
        dispatch(roleActions.removeRole())
    }
  return (
    <Fragment>
        <Button onClick={handleLogout} className='ui button'>Çıkış Yap</Button>
    </Fragment>
  )
}

export default LogoutButton