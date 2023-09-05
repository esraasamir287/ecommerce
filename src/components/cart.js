import  React ,{useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../css/cart.css"
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from '@mui/material/IconButton';


const rows = [
  {img:'https://websitedemos.net/skin-cleanser-store-02/wp-content/uploads/sites/933/2021/08/skin-cleanser-template-product-img-4-400x600.jpg',
    name :"Antiaging Skin Oil",
    price:"144$"
    },
    {img:'https://websitedemos.net/skin-cleanser-store-02/wp-content/uploads/sites/933/2021/08/skin-cleanser-template-product-img-4-400x600.jpg',
    name :"Antiaging Skin Oil",
    price:"144$",
    },
];

const Cart = () => {
const [quantity,setQuantity] = useState(1);
const handleIncrement = () => {
  setQuantity(quantity+1)
};
const handledecrement = () => {
  setQuantity(quantity-1)
};
  return (
    <div className="container mt-5 cart-section">
    <div className="row cart-row d-flex justify-content-center">
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell className='product-head' align="right">Product</TableCell>
            <TableCell className='product-head' align="right">Price</TableCell>
            <TableCell  className='product-head' align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='trash-cell'>
                <IconButton aria-label="add to favorites">
                  <DeleteIcon className="trash-color"/>
              </IconButton>
              </TableCell>
              <TableCell component="th" scope="row">
                <img className='cart-product-img' src={row.img}/>
              </TableCell>
              <TableCell className='cart-product-details' align="right">{row.name}</TableCell>
              <TableCell className='cart-product-details' align="right">{row.price}</TableCell>
              <TableCell align="right">
                <ButtonGroup size="small" aria-label="small outlined button group">
                  <Button onClick={handleIncrement} >+</Button>
                  <Button >{quantity}</Button>
                  <Button disabled={quantity == 1} onClick={handledecrement} >-</Button>
                </ButtonGroup>
              </TableCell>
              
            </TableRow>
          ))}
          </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
}
export default Cart