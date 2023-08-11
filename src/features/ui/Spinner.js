import classes from "./styles/Spinner.module.css";

function Spinner({ parent = false, className }) {
  let styles = `${classes["spinner"]} ${className}`;

  if (parent) {
    styles = styles + ` w-[30px] `;
  } else {
    styles = styles + ` fixed w-[50px] top-[50%] left-[50%] `;
  }

  return <div className={styles}></div>;
}

export default Spinner;
