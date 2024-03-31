import React,{useState} from 'react';
import './BottomNavbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faTimes, faTable, faCloudArrowDown} from '@fortawesome/free-solid-svg-icons';
import{Link} from 'react-router-dom'

const BottomNavbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleClick = ()=>{
    setMobileMenu(!mobileMenu);
  }

  return (
    <div>
        <header className='header d-flex'>

        {mobileMenu ? <FontAwesomeIcon icon={faTimes} className='close home-btn' onClick={toggleClick}/>:
        <FontAwesomeIcon icon={faBars} className='open' onClick={toggleClick}/>}

        <div className=' f_flex'>
          <div className='categories'>
              <div className='dropdown-category'><FontAwesomeIcon icon={faTable}/> Categories <FontAwesomeIcon icon={faCaretDown}/></div>
          </div>

           <ul className={mobileMenu? 'nav-links-mobile':'link f_flex capitalize'}>
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

        <div className='app'>
            <FontAwesomeIcon icon={faCloudArrowDown} className='downloadIcon'/>
            <Link to='/aurora-app'>Download App</Link>
        </div>

      </header>  
    </div>
  )
}

export default BottomNavbar