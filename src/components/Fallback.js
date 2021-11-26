import styles from "./Fallback.module.css";

export const Fallback = () => {
  return (
    <div className={styles["fallback"]}>
      <h1>Something went wrong!</h1>
    </div>
  );
};
