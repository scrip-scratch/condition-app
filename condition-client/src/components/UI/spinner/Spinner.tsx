import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <div className={classes.water}></div>
    </div>
  );
};

export default Spinner;
