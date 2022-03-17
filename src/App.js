import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Trends from "./pages/Trends";
import Navi from "./layouts/Navi";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {roleActions} from './redux/store/role-slice'
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";

const App =()=>{
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const role = useSelector(state=>state.role).user_role
  useEffect(()=>{
    if(cookies.role !==undefined){
      dispatch(roleActions.setRole(cookies.role))
    }
    console.log(role)
  },[])
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </div>
  );
}

export default App;
