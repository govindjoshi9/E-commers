import React from 'react';
import './App.css';
import ProductList from './features/Product-list/ProductList';
import Home from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SingupPage from "./pages/SingupPage";
import LoginPage from "./pages/LoginPage";
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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
