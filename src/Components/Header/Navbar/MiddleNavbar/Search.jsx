import React from 'react';
import '../../Header.css';
import '../../Responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Search = () => {
  return (
    <div>
      <section className='search '>
        <div className='search-box f_flex'>
          <button>All Categories</button>
          <input type="text" placeholder='Search' />
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
        </div>
      </section>
    </div>
  );
}

export default Search;
