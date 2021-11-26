import { ProdContext } from "../context/ProductsContext";
import styles from "./Products.module.css";

const AnalyseButton = () => {
  const { dispatch } = ProdContext();

  return (
    <div className={styles["chart-btn"]}>
      <button
        onClick={() =>
          dispatch({
            type: "OPEN_MODAL",
          })
        }
      >
        Analyse
      </button>
    </div>
  );
};

export default AnalyseButton;
