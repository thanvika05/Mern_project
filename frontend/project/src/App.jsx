import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./Navbar.jsx";
import Home from "./Home";
import Products from "./Products.jsx";
import Contact from "./Contact";
import Cart from "./Cart";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";


function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn]= useState(!!localStorage.getItem("token")
);

  // useEffect --- watch cart changes
  useEffect(() => {
    console.log("Cart Updated:", cart);
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Navbar cartCount={cart.length}
      isLoggedIn = {isLoggedIn}
      on Logout ={() => {
        localStorage.removeItem("token");
        handletLoginState(false);
      }} />

      <Routes>
        <Route path="/login" element={<Login onLogin={() => handletLoginState(true)} />} />
        <Route path="/register" element={<Register onRegister={() => handletLoginState(true)} />} />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products addToCart={addToCart} />
            </ProtectedRoute>
          }
        />
        <Route 
            path = "/cart"
            element = {
              <ProtectedRoute>
                <Cart cart={cart} />
              </ProtectedRoute>
            }
        />
      </Routes>
    </>
  );
}

export default App;
