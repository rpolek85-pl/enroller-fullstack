import "milligram";
import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";

function App() {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLogged") === "true");

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem("isLogged", isLoggedIn ? "true" : "false");
  }, [isLoggedIn]);

  function loginIn(emailFromForm) {
    setEmail(emailFromForm);
    setIsLoggedIn(true);
  }

  function loginOut() {
    setEmail("");
    setIsLoggedIn(false);
    localStorage.removeItem("email");
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm onLogin={loginIn} />} />
        <Route path="/UserPanel"
           element={<UserPanel username={email} onLogout={loginOut} isLoggedIn={isLoggedIn}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
