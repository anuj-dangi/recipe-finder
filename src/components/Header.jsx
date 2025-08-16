import React from 'react'

import "../css/header.css";

const Header = () => {
  return (
    <div className='header'> 
      <div className='appName'>
          <img className='appIcon' src="/hamburger.svg"/>
          Recipe Finder
      </div>
        <div className="searchComponent">
          <img src="/search-icon.svg"/>
          <input className='searchInput' placeholder='Seach Recipe'/>
        </div>
    </div>
  )
}

export default Header;
