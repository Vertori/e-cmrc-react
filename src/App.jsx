import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WomensClothing from "./pages/WomensClothing";
import MensClothing from "./pages/MensClothing";
import ScrollToTop from "./components/ScrollToTop";
import Jewelery from "./pages/Jewelery";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/women" element={<WomensClothing />} />
            <Route path="/men" element={<MensClothing />} />
            <Route path="/jewelery" element={<Jewelery />}/>
          </Routes>
          <Sidebar />
          <Footer />
      </Router>
    </div>
  );
}

export default App;
