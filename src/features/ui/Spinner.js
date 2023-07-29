import classes from "./styles/Spinner.module.css";

function Spinner() {
  const styles = `${classes["spinner-6"]} fixed top-[50%] left-[50%]`;
  return <div className={styles}></div>;
}

export default Spinner;
