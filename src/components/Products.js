import { memo } from "react";
import { ProdContext } from "../context/ProductsContext";
import AnalyseButton from "./AnalyseButton";
import styles from "./Products.module.css";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const {
    state: { searchQuery, filter },
    dispatch,
    prodData,
    isLoading,
  } = ProdContext();

  const FilteredProducts = () => {
    let newFilteredProducts = prodData;

    if (searchQuery) {
      newFilteredProducts = newFilteredProducts.filter((item) => {
        return item.title.toLowerCase().includes(searchQuery);
      });
    }

    if (filter) {
      newFilteredProducts = newFilteredProducts.filter((item) => {
        if (filter === "all") {
          return newFilteredProducts;
        }

        return item.category === filter;
      });
    }

    return newFilteredProducts;
  };

  return (
    <>
      <div>
        <div className={styles["navbar"]}>
          <h2>SHOP</h2>
          <div>
            <div className={styles["filters"]}>
              <div>
                <select
                  onChange={(e) =>
                    dispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: e.target.value,
                    })
                  }
                >
                  <option value="all">All</option>
                  <option value="electronics">Electronics</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="men's clothing">Men's clothing</option>
                  <option value="women's clothing">Womesn's clothing</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="search..."
                  value={searchQuery}
                  onChange={(e) =>
                    dispatch({
                      type: "SEARCH_BY_QUERY",
                      payload: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isLoading && <AnalyseButton />}

      <SingleProduct FilteredProducts={FilteredProducts} />
    </>
  );
};

export default memo(Products);
