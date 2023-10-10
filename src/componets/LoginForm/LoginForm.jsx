import { Link } from "react-router-dom";
import css from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <form className={css.formLogin}>
      <label className={css.titleInputForm}>
        Email
        <input name="email" type="email" required />
      </label>
      <label className={css.titleInputForm}>
        Password
        <input type="password" required />
      </label>
      {/* <button className={css.btn} type="submit">
        login
      </button> */}
      <Link className={css.btn} to="/main">
        login
      </Link>
    </form>
  );
};

export default LoginForm;
