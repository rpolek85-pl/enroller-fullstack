import { Navigate } from "react-router-dom";
import MeetingsPage from "./meetings/MeetingsPage";

export default function UserPanel({ username, onLogout, isLoggedIn }) {

    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            <h2>Witaj {username}!</h2>
            <button onClick={onLogout}>Wyloguj</button>

            <MeetingsPage username={username} />
        </div>
    );
}
