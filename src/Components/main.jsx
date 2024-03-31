import React from 'react';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Old from './Pages/Old_Products/Old_Products';
import New from './Pages/New_Products/New_Products';
import Sell from './Pages/Sell_Products/Sell_Products';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import {Routes, Route } from "react-router-dom";
const main = () => {
  return (
    <div>
        <Header></Header>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/old-products' element={<Old/>}></Route>
        <Route path='/new-products' element={<New/>}></Route>
        <Route path='/sell-products' element={<Sell/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default main