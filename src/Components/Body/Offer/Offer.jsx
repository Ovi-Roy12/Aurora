import React from 'react';
import './Offer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

const Offer = () => {
  return (
    <div className="container mt-5 mb-3 text-center">
      <div className="row gap-2">

        {/* Gift column */}
        <div className="col-md mb-3 gift">
          <div className="p-5 d-flex justify-content-between align-items-center text-white">
            <h3>Gift for all orders <FontAwesomeIcon icon={faGift} /></h3>
            <button className='btn btn-danger'>Learn More</button>
          </div>
        </div>

        {/* Offer column */}
        <div className="col-md mb-3 offer">
          <div className="p-5 text-white ">
            <h4>Sale up to <span className='text-danger'>25%</span> off ACCESSORIES <span className='text-warning'>SMARTPHONES</span></h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
