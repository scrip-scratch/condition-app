import React from 'react';
import classes from './Navbar.module.css'; 

function Navbar() {
  return (
      <nav className={classes.navbar}>
            <a className={classes.navbar__logo} href="/">СОСТОЯНИЕ</a>
            <div className={classes.navbar__links}>
                <a className={classes.link__about} href="/about">?</a>
                {/* <div className="link__user">Login</div> */}
            </div>
      </nav>
    
  )
}

export default Navbar