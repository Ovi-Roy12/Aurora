import React, { useState } from 'react';
import axios from 'axios';

const Sell_Products = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [address, setAddress] = useState('');

  // Function to navigate to a new route
  const navigateTo = (path) => {
    window.location.href = path;
  };

  // Function to handle form submission
  const sellProductInfo = async () => {
    try {
      let formField = new FormData();

      formField.append('Name', name);
      formField.append('Price', price);
      formField.append('Description', description);
      // formField.append('Email', email);
      // formField.append('Phone', phone);
      // formField.append('Address', address);
      
      if (image !== null) {
        formField.append('Image', image);
      }

      await axios.post('http://127.0.0.1:8000/api/', formField);
      
      // After successful submission, navigate to the desired route
      navigateTo('/'); // Change the path as needed
    } catch (error) {
      console.error('Error selling product:', error);
    }
  };
  return (
    <div className="container p-2 mt-5">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Sell Your Product</h2>


          <div className="form-group p-2">
            <label className='fw-bold p-2'>Image To Upload:</label>
            <input type="file" className="form-control" name="image" onChange={(e) => setImage(e.target.files[0])} />
          </div>

          <div className="form-group p-2">
           <label className='fw-bold p-2'>Name:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          
          <div className="form-group p-2">
            <label className="fw-bold mb-2">Description:</label>
            <textarea
              className="form-control form-control-lg"
              name="description"
              style={{ width: '100%', minHeight: '200px' }} 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea> 
          </div>


          <div className="form-group p-2">
            <label className='fw-bold p-2'>Price:</label>
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder=""
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
{/* 
          <div className="form-group p-2">
           <label className='fw-bold p-2'>Email:</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group p-2">
          <label className='fw-bold p-2'>Phone:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group p-2">
           <label className='fw-bold p-2'>Address:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your address Name"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div> */}

          <button className="btn btn-primary btn-block m-2 mt-3" onClick={sellProductInfo}>Sell Product</button>

        </div>
      </div>
  )
}

export default Sell_Products