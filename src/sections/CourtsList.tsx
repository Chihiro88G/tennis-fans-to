import React from 'react';
import '../App.css';
import data from '../data/data.json';
import Court from '../components/Court';

function CourtsList() {
  return (
    <div className='courts-list-section'>
      <h2>Tennis Court Listings in Toronto Area</h2>

      <div className='courts-list-table-div'>
        <table className='courts-list-table'>
          <thead>
            <tr>
              <th>Location</th>
              <th>Area</th>
              <th>Type</th>
              <th>Club Public Hrs</th>
              <th>Courts</th>
              <th>Lights</th>
              <th>Winter Play</th>
            </tr>
          </thead>
          <tbody>
            {data.map(courtData => <Court {...courtData} key={courtData.location}/>)}
          </tbody>
        </table>
      </div>
      <div className='reference-div'>
        <p>Reference: <a href='https://www.toronto.ca/explore-enjoy/parks-recreation/places-spaces/parks-and-recreation-facilities/tennis-court-listings/'>City of Toronto - Tennis Court Listings</a></p>
      </div>
    </div>
  );
}

export default CourtsList;
