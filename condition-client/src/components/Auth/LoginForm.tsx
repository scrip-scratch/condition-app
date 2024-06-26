import { useState } from "react";
import classes from "./LoginForm.module.css";
import { authApi } from "../../api/AuthApi";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await authApi.loginAsync({ email, password });
    console.log(response); // TODO:DELETE DEV LOG
  };

  return (
    <form className={classes.enterForm}>
      <h3>Вход</h3>
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
        Нет аккаунта? <a href={"/reg"}>Зарегистрируйтесь</a>
      </p>
    </form>
  );
}

export default LoginForm;
