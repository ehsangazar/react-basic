import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import Slideshow from '../Slideshow/Slideshow';

import './Products.css';

const Products = ({ data }) => (
  <div>
    <Slideshow />
    <ul className="products">
      {data.map((item) => (
        <ProductItem key={`ProductItem-${item.id}`} data={item} />
      ))}
    </ul>
  </div>
);

export default Products;
