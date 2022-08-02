import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";

function Navigation() {
  return (
    // <ClientProvider>
    //   <AdminProvider>
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
    //   </AdminProvider>
    // </ClientProvider>
  );
}

export default Navigation;
