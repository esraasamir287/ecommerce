import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import ContextProvider from "./context";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Shop from "./pages/shop";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Cart from "./components/cart";

ReactDOM.render(
  <React.StrictMode>
    {/* <ContextProvider> */}
      <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" exact element={ <Home /> }>
        </Route>
        <Route path="/Shop"  element={<Shop />}>
        </Route>
        <Route path="/cart"  element={<Cart />}>
        </Route>
      </Routes>
      </BrowserRouter>
    {/* </ContextProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
