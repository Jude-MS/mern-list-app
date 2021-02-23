import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '../Button/Button';

import './ProductDetail.css';

const ProductDetail = props => {
  const {title, price, opsys, brand, description, memory, disc} = props.location.state;
  let history = useHistory();

  const handleBack = () => {
    history.push("/");
  }
  return (
    <li className="product-detail">
      <h2>Details of the {title}</h2>
      <p>Price: ${price}</p>
      <p>Brand: {brand}</p>
      <p>Operating System: {opsys}</p>
      <p>Description: {description}</p>
      <p>Memory: {memory}</p>
      <p>Disc: {disc}</p>
      <Button onClick={() => handleBack()}>Back</Button>
    </li>
  );
};

export default ProductDetail;
