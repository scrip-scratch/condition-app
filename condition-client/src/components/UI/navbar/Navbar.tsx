import { Theme } from "../../../context/ThemeContext";
import { useTheme } from "../../../hooks/useTheme";
import { ThemeIcon } from "../Icons/ThemeIcon";
import classes from "./Navbar.module.css";

function Navbar() {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    const newTheme: Theme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    document.documentElement.setAttribute("data-theme", newTheme);
    console.log(newTheme); // TODO:DELETE DEV LOG
    setTheme(newTheme);
  };

  return (
    <nav className={classes.navbar}>
      <a className={classes.navbar__logo} href="/">
        СОСТОЯНИЕ
      </a>
      {/* <a className={classes.link__about} href="/about">
        ?
      </a> */}
      <ThemeIcon onClick={() => handleChangeTheme()} />
    </nav>
  );
}

export default Navbar;
