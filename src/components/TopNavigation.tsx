import React from 'react';
import '../App.css';

function TopNavigation() {
  return (
    <nav>
      <ul className="navigation">
        <li><a href="index.html" className='white-color'>Home</a></li>
        <li><a href="#about" className='white-color'>Courts</a></li>
        <li><a href="#contact" className='white-color'>Contact</a></li>
      </ul>
      <div className="hamburger-menu">
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </div>
    </nav>
  );
}

export default TopNavigation;
