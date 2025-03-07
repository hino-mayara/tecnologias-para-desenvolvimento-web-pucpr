import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const correctEmail = "mayara.hino@pucpr.br";
  const correctPassword = "123456";

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onSubmit = () => {
    if (password === correctPassword && email === correctEmail) {
      setLoginMessage("Acessado com sucesso!");
      return;
    }

    setLoginMessage("Usuário ou senha incorretos!");
  };

  return (
    <>
      <h1>
        <strong>Login - Teste</strong>
      </h1>
      <div>
        <input
          type="email"
          id="email"
          value={email}
          onInput={onChangeEmail}
          name="email"
          style={{ display: "block" }}
        ></input>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onInput={onChangePassword}
          style={{ display: "block" }}
        ></input>
        <button id="acessar" onClick={onSubmit}>
          Acessar
        </button>
        {loginMessage !== "" && <h4>{loginMessage}</h4>}
      </div>
    </>
  );
}

export default Login;
