import { useState, useContext } from "react";
import classes from "./Auth.module.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async () => {
    // const response = await authApi.loginAsync({ login, password });
    // console.log(response); // TODO:DELETE DEV LOG
  };

  return (
    <form className={classes.enterForm}>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button button--main" onClick={handleSubmit}>
        Войти
      </button>
      <p>
        Нет аккаунта? <a href={"/"}>Зарегистрируйтесь</a>
      </p>
    </form>
  );
}

export default LoginForm;
