import React from 'react';
import '../App.css';
import TopNavigation from '../components/TopNavigation';

function Top() {
  return (
    <div className='top-img-section'>
      <img src="top-img.jpg" alt="tennis balls" />

      <TopNavigation />
      <h1 className='white-color'>Tennis Fans TO</h1>
    </div>
  );
}

export default Top;
