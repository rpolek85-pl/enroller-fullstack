import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function LoginForm(props) {
    const [email, setEmail] = useState('rpolek@gmail.com');

    useEffect(() => {
        document.title = "Logowanie";
    }, []);

    let msg;
    if (email.length < 6) {
        msg = <div>Twój email jest za krótki</div>;
    } else if (email.length > 20) {
        msg = <div>Twój email jest za długi</div>;
    } else {
        msg = <div>Twój email jest ok</div>;
    }

    return (
        <header className="container">
            <h1>Witaj w systemie do zapisów na zajęcia</h1>

            <div className="form-group">
                <label htmlFor="email">Podaj e-mail:</label>
                <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {msg}

            <Link to="/UserPanel">
                <button type="button" onClick={() => props.onLogin(email)}>
                    Wchodzę
                </button>
            </Link>
        </header>
    );
}
