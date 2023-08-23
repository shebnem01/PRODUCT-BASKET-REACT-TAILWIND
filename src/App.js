import Basket from "pages/Basket";
import Home from "pages/Home";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "shared/components/Header";
import { getProducts } from "shared/services/products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </>
  );
}

export default App;
