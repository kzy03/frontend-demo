import React from "react";
import Layout from "./components/layout/Layout";
import Member from "./components/Auth/member/Member";
import ForgotPassword from "./components/Auth/forgotPassword/ForgotPassword";
import SignIn from "./components/Auth/member/SignIn";
import SignUp from "./components/Auth/signup/SignUp";
import DashBoard from "./components/DashBoard";
import RegisterViaCard from "./components/Auth/member/RegisterViaCard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/member" element={<Member />} />
          <Route path="/register-via-card" element={<RegisterViaCard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
