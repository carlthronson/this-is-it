import React, { useState, useEffect } from 'react';
import Product from './Product';
import styled from 'styled-components';

const ProductList = styled.div`
    padding: 3px;
  transistion: background-color 0.2s ease;
  background-color: #f4f5f7;
    flex-grow: 1;
    min-height: 100px;
`   ;

export default function SearchResult() {
  { /* State */ }
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./products.json')
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.filter((product) => true));
      });
  }, []);

  const TextContent = styled.div``;

  return (
    <ProductList>
      {products.map((product, index) => (
        <Product key={index} index={index} product={product} />
      ))}
    </ProductList>
  );
}
