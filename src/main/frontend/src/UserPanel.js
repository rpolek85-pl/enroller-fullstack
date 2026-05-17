import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import MeetingsPage from "./meetings/MeetingsPage";

export default function UserPanel({ username, onLogout, isLoggedIn }) {
  useEffect(() => {
    document.title = "Panel Użytkownika";
  }, []);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container">
      <h1>Witaj w systemie do zapisów na zajęcia</h1>

      <div className="row">
        <div className="column">
          <h2>Witaj {username}!</h2>
        </div>

        <div className="column column-100 column-offset-25">
          <button className="button button-outline logout-btn" onClick={onLogout}>Wyloguj</button>
        </div>
      </div>

      <MeetingsPage username={username} />
    </div>
  );
}
