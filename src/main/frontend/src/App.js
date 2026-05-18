import "milligram";
import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";
import NewUserForm from "./NewUserForm";

function App() {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLogged") === "true");
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    localStorage.setItem("isLogged", isLoggedIn ? "true" : "false");
  }, [isLoggedIn]);

  function loginIn(emailFromForm) {
    setEmail(emailFromForm);
    setToken(token);
    setIsLoggedIn(true);
  }

  function loginOut() {
    setEmail("");
    setToken("");
    setIsLoggedIn(false);
    localStorage.removeItem("email");
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm onLogin={loginIn} />} />
        <Route path="/UserPanel"
           element={<UserPanel username={email} onLogout={loginOut} isLoggedIn={isLoggedIn}/>}/>
        <Route path="/NewUserForm"
           element={<NewUserForm />}/>
      </Routes>
    </Router>
  );
}

export default App;
