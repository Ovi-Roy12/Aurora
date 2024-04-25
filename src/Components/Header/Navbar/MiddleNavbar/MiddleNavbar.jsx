import React,{useState} from 'react';
import '../../Header.css';
import '../../Responsive.css';
import logo from '../../../assets/images/logo.jpg';
import { FavoriteBorder,Person,ShoppingCart } from '@mui/icons-material';
import{Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import Search from './Search';


const MiddleNavbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleClick = ()=>{
    setMobileMenu(!mobileMenu);
  }
  return (
    <div className='middle-nav'>   
      <div className='container c_flex'>

        <div className='logo'>
           <img src={logo} alt='logo'/>
        </div>

        <Search></Search>

        <div className='icons'> 
            {mobileMenu ? <FontAwesomeIcon icon={faTimes} className='close home-btn' onClick={toggleClick}/>:
            <FontAwesomeIcon icon={faBars} className='open' onClick={toggleClick}/>} 
          
            {/* Render navigation links only when mobileMenu is true */}
            {mobileMenu && (
              <ul className='nav-links-mobile'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/shop'>Shop</Link>
                </li>
                <li>
                  <Link to='/aboutUs'>About Us</Link>
                </li>
                <li>
                  <Link to='/newProduct'>New Product</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            )}

            <div className='cart f_flex'> {/* Cart icons container */}
              <Link to='/cart'>
                <Person className='cart-icon' />
              </Link>

              <Link to='/wishlist'>
                <FavoriteBorder className='cart-icon' />
                <span>0</span>
              </Link>

              <Link to='/register'>
                <ShoppingCart className='cart-icon' />
                <span>0</span>
              </Link>
            </div>
        </div>
    </div>

    </div>
  )
}

export default MiddleNavbar;