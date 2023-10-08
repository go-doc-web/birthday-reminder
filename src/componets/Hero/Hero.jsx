import css from "./Hero.module.scss";

import React from "react";

const Hero = () => {
  return (
    <section className={css.section}>
      <div className={css.thumb}>
        <img
          className={css.birthdayIcon}
          src="./img/birthday-img-1x.png"
          alt="birthday icon"
        />
      </div>

      <h1 className={css.sectionTitle}>Birthday reminder !</h1>
      <p className={css.afterTitle}>
        Never forget birthdays of your close once’s
      </p>
    </section>
  );
};

export default Hero;
