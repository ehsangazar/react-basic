import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import './Products.css'

const Products = ({ data }) => {
    return (
      <ul className="products">
        {data.map((item) => (
          <ProductItem key={`ProductItem-${item.id}`} data={item} />
        ))}
      </ul>
    );
};

export default Products