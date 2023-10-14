import { Link, NavLink } from "react-router-dom";
import css from "./Home.module.scss";
import Login from "../LoginPage/Login";

function Home() {
  return (
    <section className={css.sectionHome}>
      <div className={css.wrapper}>
        <div className={css.forkControl}>
          <h1>
            Birthday reminder! <br /> 
            <span>Platform for anniversaries</span>
          </h1>
          <p>Get notified before the special day </p>
          <div className={css.btnBlock}>
            <Link className={css.btn} to="/register">
              Register
            </Link>
            <Link className={css.btn} to="/login">
              I have an account
            </Link>
          </div>
        </div>

        <div className={css.infoField}></div>
      </div>
    </section>
  );
}

export default Home;
