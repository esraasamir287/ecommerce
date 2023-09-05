import React, { useState ,useEffect} from "react";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import Services from '../services/services';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const RecipeReviewCard = () => {
  const[products,setProducts] = useState("")
    // let data = Services.getProducts()
    // console.log(data) 
    // useEffect(()=> {
    //     data.then(function(result) {
    //     setProducts(result.data)
    //      console.log("products",products) 
    //   })
    //           .catch((err) => console.error(err))
    //   }, [])
 

      const productsCrad = products.length ? (
        products.map((product,index) => {
          return(
            <div className='col-md-3 my-4' key={index}>

            <Card  key={index} className="card-product">
              <CardActions disableSpacing className="fav-icon-div">
                <IconButton aria-label="add to favorites">
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
              </CardActions>
              <CardContent  className="image-card">
              <CardMedia className="img"
                component="img"
               
                image={product.img}
                alt={product.name}
                
              />
              </CardContent>

              <CardContent className="mb-2">
                <Typography variant="body2" color="text.primary">
                  {product.name}
                </Typography>
              </CardContent>
              <div className="row px-3">
              <CardContent className="mb-2 col-8 mt-3">
                <Typography variant="body2" color="text.secondary">
                {product.price}
                </Typography>
              </CardContent>

              <CardActions disableSpacing className="col-4">
                <IconButton aria-label="add to favorites">
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </CardActions>
              </div>
            </Card>
            </div>
          )
        })
      ) : (
        <div> no products</div>

      );
  return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          {productsCrad}
      </div>
    </div>
  );
}
export default RecipeReviewCard