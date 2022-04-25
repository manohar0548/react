import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import Login from "./containers/Login";
import Registration from "./containers/Registration";
import Cart from "./containers/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Cart" exact element={<Cart/>} />

          <Route path="/Login" exact element={<Login/>} />
          <Route path="/Registration" exact element={<Registration/>} />
          <Route path="/" exact element={<ProductListing />}/>
          <Route path="/product/:productId" element={<ProductDetails/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;