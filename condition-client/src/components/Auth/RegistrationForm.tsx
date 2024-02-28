import { useState, useContext } from "react";
import classes from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passRepeat, setPassRepeat] = useState<string>("");

  const handleSubmit = async () => {
    // const response = await authApi.loginAsync({ login, password });
    // console.log(response); // TODO:DELETE DEV LOG
  };

  return (
    <form className={classes.enterForm}>
      <h3>Регистрация</h3>
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
      <input
        placeholder="Пароль еще раз"
        type="password"
        value={passRepeat}
        onChange={(e) => setPassRepeat(e.target.value)}
      />
      <button className="button button--main" onClick={handleSubmit}>
        Зарегистрироваться
      </button>
      <p>
        Есть аккаунт? <a href={"/login"}>Войти</a>
      </p>
    </form>
  );
}

export default RegistrationForm;
