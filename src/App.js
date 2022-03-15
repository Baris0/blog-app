import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Trends from "./pages/Trends";
import Navi from "./layouts/Navi";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div clasName="App">
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
    </BrowserRouter>
  );
}

export default App;
