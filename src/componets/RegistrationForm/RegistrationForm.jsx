import { Link } from "react-router-dom";

import css from "../LoginForm/LoginForm.module.scss";

const RegistrationForm = () => {
  return (
    <form className={css.formLogin}>
      <label className={css.titleInputForm}>
        Login
        <input name="login" type="text" required />
      </label>
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
      <Link className={css.btn} to="/login">
        Register
      </Link>
    </form>
  );
};

export default RegistrationForm;
