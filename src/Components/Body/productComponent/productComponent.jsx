import React from 'react';
import './productComponents.css';
import { Link } from 'react-router-dom';
const ProductComponent = () => {
  return (
    <div>
      <div className="container text-center mt-5">
        <div className="row gap-2">

          <div className=" col-md  old-products">
            <h3 className='text-white align-self-start'>Old Products</h3>
            <Link to='/old-products' className="align-self-start">
            <button className='btn btn-primary'>Shop Now</button>
            </Link>
          </div>


          <div className="col-lg-6  new-products">
            <h3 className='text-white align-self-start'>New Products</h3>
            <Link to='new-products' className='align-self-start'>
            <button className='btn btn-success'>Shop Now</button>
            </Link>
          </div>

          <div className="col-md sell-products ">
            <h3 className='text-white align-self-start'>Sell Products</h3>
            <Link to='/sell-products' className='align-self-start'>
            <button className='btn btn-danger'>Shop Now</button>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
