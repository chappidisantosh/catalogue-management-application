import styles from "./Chart.module.css";
import { Doughnut } from "react-chartjs-2";
import { ProdContext } from "../context/ProductsContext";
import { memo } from "react";

const Chart = () => {
  const {
    state: { modal },
    prodData,
    dispatch,
  } = ProdContext();

  let jewel = [];
  let elec = [];
  let men = [];
  let women = [];

  prodData.map((item) => {
    switch (item.category) {
      case "electronics":
        return elec.push(item.category);

      case "jewelery":
        return jewel.push(item.category);

      case "men's clothing":
        return men.push(item.category);

      case "women's clothing":
        return women.push(item.category);

      default:
        return null;
    }
  });

  const jewelery = jewel.length;
  const electronics = elec.length;
  const mensClothing = men.length;
  const womensClothing = women.length;

  const data = {
    labels: ["Electronics", "Jewelery", "Men's clothing", "Women's clothing"],
    datasets: [
      {
        label: "# of Votes",
        data: [electronics, jewelery, mensClothing, womensClothing],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className={styles[`${modal ? "overlay" : "hide"}`]}>
        <div className={styles["close"]}>
          <span
            onClick={() =>
              dispatch({
                type: "CLOSE_MODAL",
              })
            }
          >
            &times;
          </span>
        </div>
        <div className={styles["chart"]}>
          <Doughnut data={data} />
        </div>
      </div>
    </>
  );
};

export default memo(Chart);
