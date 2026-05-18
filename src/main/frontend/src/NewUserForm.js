import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NewUserForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState("");

  useEffect(() => {
    document.title = "Nowy użytkownik";
  }, []);

  async function handleNewUser(login, password) {

      const resp = await fetch('/api/participants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login: login, password: password })
      });

      if (resp.ok) {
        return { success: true};
      }

      if (resp.status === 409) {
        return { success: false, error: "Użytkownik istnieje" };
      }

      return { success: false, error: "Błąd serwera"};
  }

  async function onNewUser(e) {
    if (e && e.preventDefault) e.preventDefault();
    setMsg("");
    const result = await handleNewUser(email, password);

    if (result.success) {
      navigate("/");
      setMsg('');
    } else {
      setMsg(result.error);
    }
  }

    return (
      <header className="container">
        <h1>Witaj w systemie do zapisów na zajęcia</h1>

        <div className="form-group">
          <label htmlFor="email">Podaj e-mail:</label>
          <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Podaj hasło:</label>
          <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="button" onClick={onNewUser}>Załóż konto</button>

        <p>{msg}</p>
      </header>
    );
}
