import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home_pages/Home";
import ProductDetail from "../pages/product_pages/ProductDetails";
import Category from "../pages/category_pages/Category";
import { Student } from "../pages/student_pages/Student";
const Contents = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/studnets" element={<Student />} />
      <Route
        path="/product-listings/product-detail/:id"
        element={<ProductDetail />}
      />
      <Route path="/category" element={<Category />} />
    </Routes>
  );
};

export default Contents;
