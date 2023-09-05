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
import "../css/productsShop.css"

const ProductsShop = () => {
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
 

      const productsCrad = 
      <div className="row product-card-section d-flex justify-content-center">

            <div className='col-md-4 my-4' >
            <Card  className="card-product">
              <CardActions disableSpacing className="fav-icon-div">
                <IconButton aria-label="add to favorites">
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
              </CardActions>
              <CardContent  className="image-card">
              <CardMedia className="img-product-card p-0"
                component="img"
               
                image="https://websitedemos.net/skin-cleanser-store-02/wp-content/uploads/sites/933/2021/08/skin-cleanser-template-product-img-8-400x600.jpg"
                alt="primg"
                
              />
              </CardContent>

              <CardContent className="mb-2 mt-2 mx-2">
                <Typography className="cat-card-product" variant="body2" color="text.primary">
                    Skin Care
                </Typography>
              </CardContent>
              <CardContent className="mx-2">
                <Typography className="name-product-card" variant="body2" color="text.primary">
                Almond Milk Lotion
                </Typography>
              </CardContent>
              <div className="row px-3 ">
              <CardContent className="mb-2 col-9 mt-3 mx-2">
                <Typography className="price-cart-product" variant="body2" color="text.secondary">
                144$
                </Typography>
              </CardContent>

              <CardActions disableSpacing className="col-2">
                <IconButton aria-label="add to favorites">
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </CardActions>
              </div>
            </Card>
            </div>
{/* end card */}
<div className='col-md-4 my-4' >
            <Card  className="card-product">
              <CardActions disableSpacing className="fav-icon-div">
                <IconButton aria-label="add to favorites">
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
              </CardActions>
              <CardContent  className="image-card">
              <CardMedia className="img-product-card p-0"
                component="img"
               
                image="https://websitedemos.net/skin-cleanser-store-02/wp-content/uploads/sites/933/2021/08/skin-cleanser-template-product-img-4-400x600.jpg"
                alt="primg"
                
              />
              </CardContent>

              <CardContent className="mb-2 mt-2 mx-2">
                <Typography className="cat-card-product" variant="body2" color="text.primary">
                    Skin Care
                </Typography>
              </CardContent>
              <CardContent className="mx-2">
                <Typography className="name-product-card" variant="body2" color="text.primary">
                Almond Milk Lotion
                </Typography>
              </CardContent>
              <div className="row px-3 ">
              <CardContent className="mb-2 col-9 mt-3 mx-2">
                <Typography className="price-cart-product" variant="body2" color="text.secondary">
                144$
                </Typography>
              </CardContent>

              <CardActions disableSpacing className="col-2">
                <IconButton aria-label="add to favorites">
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </CardActions>
              </div>
            </Card>
            </div>
            <div className='col-md-4 my-4' >
            <Card  className="card-product">
              <CardActions disableSpacing className="fav-icon-div">
                <IconButton aria-label="add to favorites">
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
              </CardActions>
              <CardContent  className="image-card">
              <CardMedia className="img-product-card p-0"
                component="img"
               
                image="https://websitedemos.net/skin-cleanser-store-02/wp-content/uploads/sites/933/2021/08/skin-cleanser-template-product-img-5-400x600.jpg"
                alt="primg"
                
              />
              </CardContent>

              <CardContent className="mb-2 mt-2 mx-2">
                <Typography className="cat-card-product" variant="body2" color="text.primary">
                    Skin Care
                </Typography>
              </CardContent>
              <CardContent className="mx-2">
                <Typography className="name-product-card" variant="body2" color="text.primary">
                Almond Milk Lotion
                </Typography>
              </CardContent>
              <div className="row px-3 ">
              <CardContent className="mb-2 col-9 mt-3 mx-2">
                <Typography className="price-cart-product" variant="body2" color="text.secondary">
                144$
                </Typography>
              </CardContent>

              <CardActions disableSpacing className="col-2">
                <IconButton aria-label="add to favorites">
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </CardActions>
              </div>
            </Card>
            </div>
            <div className='col-md-4 my-4' >
            <Card  className="card-product">
              <CardActions disableSpacing className="fav-icon-div">
                <IconButton aria-label="add to favorites">
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
              </CardActions>
              <CardContent  className="image-card">
              <CardMedia className="img-product-card p-0"
                component="img"
               
                image="https://websitedemos.net/skin-cleanser-store-02/wp-content/uploads/sites/933/2021/08/skin-cleanser-template-product-img-8-400x600.jpg"
                alt="primg"
                
              />
              </CardContent>

              <CardContent className="mb-2 mt-2 mx-2">
                <Typography className="cat-card-product" variant="body2" color="text.primary">
                    Skin Care
                </Typography>
              </CardContent>
              <CardContent className="mx-2">
                <Typography className="name-product-card" variant="body2" color="text.primary">
                Almond Milk Lotion
                </Typography>
              </CardContent>
              <div className="row px-3 ">
              <CardContent className="mb-2 col-9 mt-3 mx-2">
                <Typography className="price-cart-product" variant="body2" color="text.secondary">
                144$
                </Typography>
              </CardContent>

              <CardActions disableSpacing className="col-2">
                <IconButton aria-label="add to favorites">
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </CardActions>
              </div>
            </Card>
            </div>
{/* end card */}
<div className='col-md-4 my-4' >
            <Card  className="card-product">
              <CardActions disableSpacing className="fav-icon-div">
                <IconButton aria-label="add to favorites">
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
              </CardActions>
              <CardContent  className="image-card">
              <CardMedia className="img-product-card p-0"
                component="img"
               
                image="https://websitedemos.net/skin-cleanser-store-02/wp-content/uploads/sites/933/2021/08/skin-cleanser-template-product-img-4-400x600.jpg"
                alt="primg"
                
              />
              </CardContent>

              <CardContent className="mb-2 mt-2 mx-2">
                <Typography className="cat-card-product" variant="body2" color="text.primary">
                    Skin Care
                </Typography>
              </CardContent>
              <CardContent className="mx-2">
                <Typography className="name-product-card" variant="body2" color="text.primary">
                Almond Milk Lotion
                </Typography>
              </CardContent>
              <div className="row px-3 ">
              <CardContent className="mb-2 col-9 mt-3 mx-2">
                <Typography className="price-cart-product" variant="body2" color="text.secondary">
                144$
                </Typography>
              </CardContent>

              <CardActions disableSpacing className="col-2">
                <IconButton aria-label="add to favorites">
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </CardActions>
              </div>
            </Card>
            </div>
            <div className='col-md-4 my-4' >
            <Card  className="card-product">
              <CardActions disableSpacing className="fav-icon-div">
                <IconButton aria-label="add to favorites">
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
              </CardActions>
              <CardContent  className="image-card">
              <CardMedia className="img-product-card p-0"
                component="img"
               
                image="https://websitedemos.net/skin-cleanser-store-02/wp-content/uploads/sites/933/2021/08/skin-cleanser-template-product-img-5-400x600.jpg"
                alt="primg"
                
              />
              </CardContent>

              <CardContent className="mb-2 mt-2 mx-2">
                <Typography className="cat-card-product" variant="body2" color="text.primary">
                    Skin Care
                </Typography>
              </CardContent>
              <CardContent className="mx-2">
                <Typography className="name-product-card" variant="body2" color="text.primary">
                Almond Milk Lotion
                </Typography>
              </CardContent>
              <div className="row px-3 ">
              <CardContent className="mb-2 col-9 mt-3 mx-2">
                <Typography className="price-cart-product" variant="body2" color="text.secondary">
                144$
                </Typography>
              </CardContent>

              <CardActions disableSpacing className="col-2">
                <IconButton aria-label="add to favorites">
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </CardActions>
              </div>
            </Card>
            </div>

        </div>
     
  return (
      <div className="col-md-8">
          {productsCrad}
      {/* </div> */}
    </div>
  );
}
export default ProductsShop