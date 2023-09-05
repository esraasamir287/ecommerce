import React from "react";
import "../css/categories.css"
import Button from '@mui/material/Button';
import "../css/deserve.css"
const Deserve = () => {

      const sectionRender = 
       <div className="row d-flex justify-content-center">
            <div className="background-overlay"></div>
            <div className="deserve-txt px-4">
                You deserve a little gift <br/> that says "love"
            </div>
            {/* <div className="desc-deserve px-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div> */}
            <div className="px-4 mt-3">
                <Button className="category-shop-btn deserve-btn p-3" >choose your products</Button>
            </div>
       </div>
        
     
        

   
  return (
      <div className="deserve-section mt-5">
        {/* <div className="row d-flex justify-content-center"> */}
          {sectionRender}
      {/* </div> */}
    </div>
  );
}
export default Deserve