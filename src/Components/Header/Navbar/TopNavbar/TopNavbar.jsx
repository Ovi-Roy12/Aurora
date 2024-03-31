import React from 'react';
import './TopNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { Facebook,Instagram, Language,  } from '@mui/icons-material';

const TopNavbar = () => {

  return (
    <div className='top-nav'>
      <div className="container d-flex">
        <div className='left-row'>
         <label> <FontAwesomeIcon icon={faPhone}/> +88012 3457 7564</label>
         <label> <FontAwesomeIcon icon={faEnvelope}/> Aurora@gmail.com</label>
        </div>
          <div className='right-row '>
            <label>Need Helps</label>
            <label>Theme FAQ's</label>

            <label>
            <Language/> EN
            <span> <FontAwesomeIcon icon={faCaretDown}/></span>
            </label>

            <Facebook/>
            <Instagram/>
          </div>
        </div>
      </div>
  );
};

export default TopNavbar;












