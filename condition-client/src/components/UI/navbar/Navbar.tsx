import React from "react";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <a className={classes.navbar__logo} href="/">
        СОСТОЯНИЕ
      </a>
      <a className={classes.link__about} href="/about">
        ?
      </a>
    </nav>
  );
}

export default Navbar;
