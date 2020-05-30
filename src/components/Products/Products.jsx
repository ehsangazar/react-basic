import React, { useEffect, useState } from 'react';
import ReactPlaceholder from 'react-placeholder';
import {
  TextBlock,
  MediaBlock,
  TextRow,
  RectShape,
  RoundShape,
} from 'react-placeholder/lib/placeholders';
import ProductItem from '../ProductItem/ProductItem';
import Slideshow from '../Slideshow/Slideshow';
import ProductsData from '../App/PRODUCTS.json';
import 'react-placeholder/lib/reactPlaceholder.css';
import './Products.css';

const awesomePlaceholder = (
  <div className="my-awesome-placeholder">
    <TextBlock rows={7} color="grey" />
  </div>
);


const Products = () => {
  const [data, setData] = useState([{}, {}, {}, {}]);
  useEffect(() => {
    setTimeout(() => {
      setData(ProductsData);
    }, 1000);
  }, []);
  return (
    <div>
      <Slideshow />

      <ul className="products">
        {data.map((item) => (
          <ReactPlaceholder ready={item.id} customPlaceholder={awesomePlaceholder}>
            <ProductItem key={`ProductItem-${item.id}`} data={item} />
          </ReactPlaceholder>
        ))}
      </ul>
    </div>
  );
};

export default Products;
