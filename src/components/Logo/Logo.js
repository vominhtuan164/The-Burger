import React from "react";
import burgerLogo from "../../assets/images/1988.jpg";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="MyBurger"></img>
    </div>
  );
};

export default Logo;
