import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './pages/Home';
import SingupPage from "./pages/SingupPage";
import LoginPage from "./pages/LoginPage";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetPage from './pages/ProductDetPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
  },
  {
    path: "/login",
    element: <div><LoginPage/></div>,
  },
  {
    path: "/Signup",
    element: <div><SingupPage/></div>,
  },
  {
    path: "/Cart",
    element: <div><CartPage/></div>,
  },
  { 
    path: "/Checkout",
    element: <div><Checkout/></div>,
  },
  {
    path: "/ProductDetails",
    element: <div><ProductDetPage/></div>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
