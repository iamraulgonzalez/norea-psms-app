import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home_pages/Home";
import { Student } from "../pages/student_pages/Student";
const Contents = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/studnets" element={<Student />} />
    </Routes>
  );
};

export default Contents;
