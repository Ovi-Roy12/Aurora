import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, Col, Row } from 'reactstrap';


const Featured_Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className='text-center mt-5 mb-4'><span className='text-danger p-2'>Featured</span> Products</h2>
      <Row xs="2" sm="2" md="4" lg="4" className="g-2">
        {products.map((product, index) => (
          <Col key={index}>
            <Card>
              <Link to={`/show-product/${product.id}` } className='showProduct'>
                <CardImg
                  alt="Product Image"
                  src={product.Image}
                  top
                  width="100%"
                  height = "200px"
                />
              </Link>
              <CardBody>
                <h5 className="card-title">{product.Name}</h5>
                <p className="card-text">{product.category}</p>
                <p className="card-text">{product.Description}</p>
                <p className="card-text">{product.Price}</p>
                <button className='btn btn-primary'>Add to Cart</button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Featured_Products;

