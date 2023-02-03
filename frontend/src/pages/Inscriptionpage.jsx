import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Inscriptionpage() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value === passwordConfirmRef.current.value) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/user`, {
          username: usernameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
        .then((reponse) => {
          if (reponse.status === 201) {
            navigate("/connexion");
          }
        })
        .catch((err) => {
          setMessageError(err.response.data);
        });
    } else {
      setConfirmPassword("");
      setPassword("");

      setMessageError("Erreur dans le mot de passe");
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {messageError && <p className="error">{messageError}</p>}
      <div>
        <label htmlFor="username">Username</label>
        <input ref={usernameRef} id="username" type="text" />
      </div>
      <div>
        <label htmlFor="mail">Email</label>
        <input ref={emailRef} id="mail" type="email" />
      </div>
      <div>
        <label htmlFor="password">Mot de passe</label>
        <input
          value={password}
          ref={passwordRef}
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="passwordConfirm">Comfirmer mot de passe</label>
        <input
          value={confirmPassword}
          ref={passwordConfirmRef}
          id="passwordConfirm"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit">Creer un compte</button>
    </form>
  );
}
