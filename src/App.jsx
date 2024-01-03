import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/Login';
import Alert from './components/Alert';

const App = () => {

  const [cart, setCart] = useState([]);
  const [showLogin, setShowLogin] = useState(false)
  const [showCart, setShowCart] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1200)
  }


  const addToCart = (data) => {
    let result = Object.values(data)
    setCart([...cart, result]);
  }

  const handleShow = (value) => {
    setShowCart(value);
  }

  return (
    <Router>
      <Navbar cart={cart.length} handleShow={handleShow} showCart={showCart} />
      <Alert alert={alert} />
      {
        showLogin ?  <Login showLogin={showLogin} setShowLogin={setShowLogin} showAlert={showAlert} /> : showCart ? <Cart cart={cart} /> : <Products addToCart={addToCart} setShowLogin={setShowLogin} />
      }
     

    </Router>
  );
};

export default App;
