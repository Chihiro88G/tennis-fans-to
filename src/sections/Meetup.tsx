import React from 'react';
import '../App.css';

function Meetup() {
  const clickSearch = () => {
    window.open('https://www.meetup.com/find/?keywords=tennis&location=ca--on--toronto&source=GROUPS');
  }

  return (
    <div className='meetup-section'>
      <img src="tennis-meetup-img.jpg" alt="tennis balls" />
      <h2 className='white-color'>Looking for Tennis Meetups?</h2>
      <div className='search-btn-div'>
        <button onClick={clickSearch}>SEARCH</button>
      </div>
    </div>
  );
}

export default Meetup;
