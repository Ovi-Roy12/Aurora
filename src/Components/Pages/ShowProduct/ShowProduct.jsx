import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardImg } from 'reactstrap';

const ShowProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleBuyNow = () => {
    // Implement buy now functionality here
    alert('Buy Now option clicked!');
  };

  const handleReview = () => {
    // Implement review functionality here
    alert('Review option clicked!');
  };

  return (
    <div className="container">
      <h2 className="my-4">Product Details</h2>
      {product ? (
        <div>
          <Card>
            <CardImg src={product.Image} alt="Product Image" />
            <CardBody>
              <h3 className="card-title">{product.Name}</h3>
              <h5 className="card-text">{product.category}</h5>
              <p className="card-text">{product.Description}</p>
              <h5 className="card-text">Price: ${product.Price}</h5>
              <Button className="mr-2 me-2" color="success" onClick={handleBuyNow}>Buy Now</Button>
              <Button color="primary me-2" >Add to Cart</Button>
              <Button color="secondary" onClick={handleReview}>Write a Review</Button>
            </CardBody>
          </Card>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowProduct;
