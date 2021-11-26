import { memo } from "react";
import { ProdContext } from "../context/ProductsContext";
import styles from "./Products.module.css";

const SingleProduct = (props) => {
  const { isLoading, error } = ProdContext();

  const { FilteredProducts } = props;

  return (
    <div className={styles["products"]}>
      {FilteredProducts().length > 0 ? (
        FilteredProducts().map((item) => {
          const {
            id,
            image,
            title,
            price,
            rating: { count, rate },
            description,
          } = item;

          return (
            <div key={id} className={styles["card"]}>
              <div className={styles["card-image"]}>
                <img src={image} alt={title} />
              </div>
              <div className={styles["card-info"]}>
                <h2>{title}</h2>
                <h3>
                  Price: <span>₹{Math.round(price)}</span>
                </h3>
                <div className={styles["card-other-info"]}>
                  <h3>
                    count: <span>{count}</span>
                  </h3>
                  <h3>
                    rating:
                    <span>
                      {rate} <i className="fas fa-star"></i>
                    </span>
                  </h3>
                </div>
                <div className={styles["card-description"]}>
                  <h3>
                    Description:
                    <span> {`${description.substring(1, 150)}...`}</span>
                  </h3>
                </div>
              </div>
            </div>
          );
        })
      ) : isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>No products found!</p>
      )}
    </div>
  );
};

export default memo(SingleProduct);
