import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ProductPayment from "./pages/ProductPayment";
import Maplist from "./pages/Maplist";

const App = () => {
  return (
    <Routes>
      {/* Layout chính */}
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Homepage />} /> {/* Trang chính */}
        <Route path="about-us" element={<AboutUs />} />
        <Route path="maplist" element={<Maplist />} />
        <Route path="product-payment" element={<ProductPayment />} />
      </Route>
    </Routes>
  );
};

export default App;
