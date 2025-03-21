import React, { useState } from 'react';
import '../App.css';
import data from '../data/data.json';
import Court from '../components/Court';
import Pagenation from '../components/Pagenation';
import Filter from '../components/Filter';

function CourtsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [courtsPerPage] = useState(10);
  const [selectedArea, setSelectedArea] = useState<number | null>(null);

  const filteredData = selectedArea === null 
  ? data 
  : data.filter((d: any) => d.area === selectedArea);

  const indexOfLastCourt = currentPage * courtsPerPage;
  const indexOfFirstCourt = indexOfLastCourt - courtsPerPage;
  const currentCourts = filteredData.slice(indexOfFirstCourt, indexOfLastCourt);

  return (
    <div className='courts-list-section'>
      <h2>Tennis Court Listings in Toronto Area</h2>
      <div className='filters'>
        <Filter onChange={setSelectedArea} />
        <Filter onChange={setSelectedArea} />
        <Filter onChange={setSelectedArea} />
        <Filter onChange={setSelectedArea} />
      </div>
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
            {currentCourts.map(courtData => <Court {...courtData} key={courtData.location}/>)}
          </tbody>
        </table>
        <Pagenation courtsPerPage={courtsPerPage} totalCourts={filteredData.length} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
      <div className='reference-div'>
        <p>Reference: <a href='https://www.toronto.ca/explore-enjoy/parks-recreation/places-spaces/parks-and-recreation-facilities/tennis-court-listings/'>City of Toronto - Tennis Court Listings</a></p>
      </div>
    </div>
  );
}

export default CourtsList;
