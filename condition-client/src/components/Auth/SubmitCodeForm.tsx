import { useState } from "react";
import classes from "./LoginForm.module.css";

function SubmitCodeForm() {
  const [code, setCode] = useState<string>("");

  const handleSubmit = async () => {
    // const response = await authApi.loginAsync({ login, password });
    // console.log(response); // TODO:DELETE DEV LOG
  };

  return (
    <form className={classes.enterForm}>
      <h3>Код подтверждения</h3>
      <input
        placeholder="Введите код"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
    </form>
  );
}

export default SubmitCodeForm;
