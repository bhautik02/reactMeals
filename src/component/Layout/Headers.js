import React, { Fragment } from "react";
import meals from "./../../assets/meals.jpg";
import classes from "./Headers.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Headers = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <HeaderCartButton onConfirm={props.onClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="A diligious Food." />
      </div>
    </Fragment>
  );
};

export default Headers;
