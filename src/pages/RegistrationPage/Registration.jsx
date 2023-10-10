import { Link } from "react-router-dom";
import css from "../LoginPage/Login.module.scss";
import RegistrationForm from "../../componets/RegistrationForm/RegistrationForm";
const Registration = () => {
  return (
    <section className={css.sectionLogin}>
      <div className={css.sectionForm}>
        <h2 className={css.titleForm}>Registration</h2>
        <RegistrationForm />
        <br />
        <hr />
        <p>
          Есть аккаунт ! <Link to="/login">Log In</Link>
        </p>
      </div>

      <div className={css.sectionImg}></div>
    </section>
  );
};

export default Registration;
