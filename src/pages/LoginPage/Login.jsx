import { Link } from "react-router-dom";
import css from "./Login.module.scss";

import LoginForm from "../../componets/LoginForm/LoginForm";

const Login = () => {
  return (
    <section className={css.sectionLogin}>
      <div className={css.sectionForm}>
        <h2 className={css.titleForm}>Log In</h2>
        <LoginForm />
        <br />
        <hr />
        <p>
          Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
        </p>
      </div>

      <div className={css.sectionImg}></div>
    </section>
  );
};

export default Login;
