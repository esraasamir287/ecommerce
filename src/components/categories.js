import React from "react";
import "../css/categories.css"
import Button from '@mui/material/Button';

const Categories = () => {
//   const[products,setProducts] = useState("")
    // let data = Services.getProducts()
    // console.log(data) 
    // useEffect(()=> {
    //     data.then(function(result) {
    //     setProducts(result.data)
    //      console.log("products",products) 
    //   })
    //           .catch((err) => console.error(err))
    //   }, [])
 

      const categoryCrad = 
       <div className="row categories-row d-flex justify-content-center">
            <div className="col-md-4 category-card">
                <div className="img-category">
                <div className="overlay-color"></div>
                    <img src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/category-01-free-img.jpg" alt="cat"/>
                </div>
                <div className="text-category">
                    Skin Care
                    <div className="d-flex justify-content-center mt-3">
                        <Button className="category-shop-btn p-3" variant="text">Shop Now</Button>
                    </div>
                </div>
            </div>

            <div className="col-md-4 category-card">
                <div className="img-category">
                <div className="overlay-color"></div>
                    <img src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/category-02-free-img.jpg" alt="cat"/>
                </div>
                <div className="text-category">
                    Hair Care
                    <div className="d-flex justify-content-center mt-3">
                        <Button className="category-shop-btn p-3" variant="text">Shop Now</Button>
                    </div>
                </div>
            </div>

            <div className="col-md-4 category-card">
                <div className="img-category">
                <div className="overlay-color"></div>
                    <img src="https://websitedemos.net/beauty-products-store-04/wp-content/uploads/sites/830/2021/04/category-03-free-img.jpg" alt="cat"/>
                </div>
                <div className="text-category">
                    Bath & Body
                    <div className="d-flex justify-content-center mt-3">
                        <Button className="category-shop-btn p-3" variant="text">Shop Now</Button>
                    </div>
                </div>
            </div>
       </div>
        
     
        

   
  return (
      <div className="container mt-5">
        {/* <div className="row d-flex justify-content-center"> */}
          {categoryCrad}
      {/* </div> */}
    </div>
  );
}
export default Categories