import "milligram";
import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";

function App() {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginIn(emailFromForm) {
    setEmail(emailFromForm);
    setIsLoggedIn(true);
  }

  function loginOut() {
    setEmail("");
    setIsLoggedIn(false);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm onLogin={loginIn} />} />
        <Route path="/UserPanel" element={<UserPanel username={email} onLogout={loginOut} isLoggedIn={isLoggedIn}/>} />
      </Routes>
    </Router>
  );
}

export default App;
