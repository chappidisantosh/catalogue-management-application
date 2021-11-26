import { memo } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Products from "./components/Products";
import { Fallback } from "./components/Fallback";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Fallback}>
        <Products />
        <Chart />
      </ErrorBoundary>
    </div>
  );
}

export default memo(App);
