import React from "react";
// import React, { useContext, useEffect } from "react";
// import { Context } from "./context";
import Nav from "./components/nav";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";

import Home from "./pages/Home";
const App = () => {
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
      <Nav/>
      {/* <Home/> */}
      
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
       
    </>
  );
};

export default App;
