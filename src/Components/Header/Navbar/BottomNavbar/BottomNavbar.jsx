import React from 'react';
import '../../Header.css';
import '../../Responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faTable} from '@fortawesome/free-solid-svg-icons';
import{Link} from 'react-router-dom';


const BottomNavbar = ({mobileMenu}) => {

  return (
    <div>
        <header className='header d-flex'>

        {/* This is a Dropdown Category Section */}
        <div className='f_flex'>
          <div className='categories'>
              <div className='dropdown-category'><FontAwesomeIcon icon={faTable}/> Categories <FontAwesomeIcon icon={faCaretDown}/></div>
          </div>

          {/* This is  NavLink Section */}

           <ul className='link f_flex capitalize'>
            <li>
              <Link to='/'>home</Link>
            </li>
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
            <li>
              <Link to='/aboutUs'>About US</Link>
            </li>
            <li>
              <Link to='/newProduct'>New Product</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
           </ul>
        </div>  

      </header>  

      
      {/* User can Download App from here    
        <div className='app'>
            <FontAwesomeIcon icon={faCloudArrowDown} className='downloadIcon'/>
            <Link to='/aurora-app'>Download App</Link>
        </div> */}

    </div>
  )
}

export default BottomNavbar