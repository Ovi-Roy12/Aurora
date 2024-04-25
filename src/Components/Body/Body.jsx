import React from 'react';
import ProductComponent from './productComponent/productComponent';
import Carousel from './Carousel/Carousel';
import FeaturedProducts from './Featured_Product/Featured_Products';
import Offer from './Offer/Offer';

const Body = () => {
  return (
    <div>
      <Carousel/>
      <ProductComponent/>
      <FeaturedProducts/>
      <Offer/>
    </div>
  );
};

export default Body;
