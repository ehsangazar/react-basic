import React, { useContext, useEffect, useRef } from 'react'
import Button from '../Button/Button'
import Image from "../Image/Image";
import "./ProductItem.css";
import { Link } from 'react-router-dom'
import ThemeContext from "../../contexts/ThemeContext";
import CartContext from "../../contexts/CartContext";
import { MdAdd, MdRemoveShoppingCart } from "react-icons/md"; 
import { PROJECT_URL } from '../../configs/general'

const ProductItem = ({ data }) => {
  const themeValues = useContext(ThemeContext);
  const {carts ,dispatchCart } = useContext(CartContext);
  const productItemRef = useRef(null)
  const added = carts.includes(data.id)

  const handleAdd = () => {
    if (added) {
      dispatchCart({
        type: "REMOVE_FROM_CART",
        id: data.id
      });
    } else {
      dispatchCart({
        type: "ADD_TO_CART",
        id: data.id,
      });
    }
  }

  useEffect(()=>{
    productItemRef.current.classList.add('visible')
  },[])

  return (
    <li className="ProductItem" ref={productItemRef}>
      <Link to={`/product/${data.id}`}>
        <h3>{data.name}</h3>
      </Link>
      <Image imgSrc={`${PROJECT_URL}/assets/img/${data.image}`} />
      <span>Price: {data.price}</span>
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
    </li>
  );
};

export default ProductItem