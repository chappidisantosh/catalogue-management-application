import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useReducer,
  memo,
} from "react";
import { ProdReducer } from "./ProductsReducer";

const Product = createContext();

const URL = "https://fakestoreapi.com/products";

const ProductsContext = ({ children }) => {
  const [prodData, setProdData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProductsData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Something went wrong, couldn't fetch the data!");
      }
      const data = await response.json();
      setIsLoading(false);
      setProdData(data);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchProductsData();
  }, [fetchProductsData]);

  const initialState = {
    modal: false,
    searchQuery: "",
    filter: "",
  };

  const [state, dispatch] = useReducer(ProdReducer, initialState);

  return (
    <Product.Provider value={{ state, dispatch, prodData, isLoading, error }}>
      {children}
    </Product.Provider>
  );
};

export const ProdContext = () => {
  return useContext(Product);
};

export default memo(ProductsContext);
