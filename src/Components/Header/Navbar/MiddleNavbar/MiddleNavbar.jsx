import React from 'react';
import './MiddleNavbar.css';
import logo from '../../../assets/images/logo.jpg';
import { FavoriteBorder,Person,ShoppingCart } from '@mui/icons-material';
import{Link} from 'react-router-dom'
import Search from './Search';

const MiddleNavbar = () => {
  return (
    <div className='middle-nav'>   
      <div className='container c_flex'>
        <div className='logo'>
           <img src={logo} alt='logo'/>
        </div>

        <Search></Search>

        <div className='cart f_flex'>

          <Link to='/cart'>
            <Person className='cart-icon'/>
          </Link>

          <Link to='/wishlist'>
            <FavoriteBorder className='cart-icon'/>
            <span>0</span>
          </Link>

          <Link to='/register'>
            <ShoppingCart className='cart-icon'/>
            <span>0</span>
          </Link>
          
        </div>
      </div>

    </div>
  )
}

export default MiddleNavbar