import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '../Button/Button';

import './ProductItem.css';


const ProductItem = props => {
  let history = useHistory();
  const {id, title, price} = props.info;

  const handlerDetail = (id) => {
    history.push(`/detail/${id}`, props.info);
  }

  return (
    <li className="product-item">
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <Button type="button" onClick={() => handlerDetail(id)}>Details</Button>
    </li>
  );
};

export default ProductItem;
