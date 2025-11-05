import React from "react";
import Counter from "./components/Counter";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      {/* <h1 className="text-3xl font-bold mb-4">Welsome to React Redux - Toolkit</h1>
      <Counter /> */}
      <Products />
    </div>
  );
};

export default App;
