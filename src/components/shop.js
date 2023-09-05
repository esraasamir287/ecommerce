import React,{useState} from "react";
import "../css/categoryShop.css"
import Button from '@mui/material/Button';
const Shopcategories = () => {
    const [price, setPrice] = useState(10);
    const handlefilter = () =>{
        console.log(price)
    }
      const sectionRender = 
            <div className="row">
                {/* price filter */}
                <div className=" filter-shop-card px-5 py-3 mb-5">
                    <h2 className="head-cat-shop">Filter By Price</h2>
                    <input onChange={(e) => setPrice(e.target.value)}
                     type="range" className="form-range" min="10" max="1000" step="10" id="customRange3"></input>
                     <div className="row">
                        <div className="col-md-5">
                            <Button variant="outlined" color="error" onClick={handlefilter}>
                                Filter
                            </Button>
                        </div>
                        <div className="col-md-6">
                            <p className="filter-price">Price: $10 — {price}$</p>
                        </div>

                     </div>
                </div>
                {/* category filter */}
                <div className=" category-shop-card px-5 py-3">
                    <h2 className="head-cat-shop">Filter By Category</h2>
                    <div className="cat-row mx-3">
                        <p>Bath & Body <span>(3)</span></p> 
                    </div>
                    <div className="cat-row mx-3">
                        <p>Make UP  <span>(5)</span></p>
                    </div>
                    <div className="cat-row mx-3">
                        <p>Hair Care  <span>(6)</span></p>
                    </div>
                    <div className="cat-row mx-3">
                        <p>Victoria's Secret  <span>(2)</span></p>
                    </div>
                    <div className="cat-row mx-3">
                        <p>Victoria's Secret  <span>(2)</span></p>
                    </div>
                </div>
            </div>
        
     
        

   
  return (
      <div className="col-md-3 mx-5 my-5">
          {sectionRender}
    </div>
  );
}
export default Shopcategories