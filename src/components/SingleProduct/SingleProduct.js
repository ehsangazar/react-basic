import React, { useContext ,} from "react";
import { useParams } from 'react-router-dom'
import PRODUCTS from '../App/PRODUCTS.json'
import Image from '../Image/Image'
import Button from '../Button/Button'
import ThemeContext from "../../contexts/ThemeContext";
import CartContext from "../../contexts/CartContext";
import './SingleProduct.css'
import { MdAdd, MdRemoveShoppingCart } from "react-icons/md"; 

const SingleProduct = (props) => {
    const { id } = useParams()
    const product = PRODUCTS.find(item => item.id === id)
    const themeValues = useContext(ThemeContext);
    const { carts, dispatchCart } = useContext(CartContext);
    const added = carts.includes(product.id);
    
    const handleAdd = () => {
      if (added) {
        dispatchCart({
          type: "REMOVE_FROM_CART",
          id: product.id,
        });
      } else {
        dispatchCart({
          type: "ADD_TO_CART",
          id: product.id,
        });
      }
    };

    return (
      <div className="SingleProduct">
        <h2>{product.name}</h2>
        <Image imgSrc={product.image} />
        <p>Price: {product.price}</p>
        <Button
          handleClick={handleAdd}
          style={{
            color: themeValues.theme.color,
            borderColor: themeValues.theme.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {added ? (
            <>
              <MdRemoveShoppingCart />
              Remove from Cart
            </>
          ) : (
            <>
              <MdAdd />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    );
};

export default SingleProduct;