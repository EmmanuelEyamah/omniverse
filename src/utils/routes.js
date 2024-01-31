import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/home";
import About from "../Pages/About/about";
import Services from "../Pages/Services/services";
import Community from "../Pages/Community/community";
import Bookings from "../Pages/Bookings/bookings";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/community" element={<Community />} />
    </Routes>
  )
}

export default AppRoutes