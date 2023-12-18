import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
// import Products from "./pages/products/Product";
// import About from "./pages/about/About";
// import Cart from "./pages/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/" element={<Products />} />*/}
        {/*<Route path="/" element={<About />} />*/}
        {/*<Route path="/" element={<Cart />} />*/}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
