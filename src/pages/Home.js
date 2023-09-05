import React from "react";
// import React, { useContext, useEffect } from "react";
// import { Context } from "./context";
// import Nav from "./components/nav";
// import { Routes, Route } from "react-router-dom";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
import RecipeReviewCard from "../components/products"
import SimpleSlider from "../components/slider"
import Categories from "../components/categories";
import Deserve from "../components/deserve";
// import Shop from "./components/shop";
const Home = () => {
  // const { state, dispatch } = useContext(Context);

  // useEffect(() => {
  //   if(localStorage.getItem("user")){

  //     const user = JSON.parse(localStorage.getItem("user"));
  //     dispatch({
  //       type: "LOGIN",
  //       payload: {
  //         user: user,
  //         token: user.token,
  //       },
  //     });
  //   }
  // }, []);
  return (
    <>
      {/* <Nav/> */}
      <SimpleSlider/>
      <Categories/>
      <RecipeReviewCard />
      <Deserve/>
    </>
  );
};

export default Home;
