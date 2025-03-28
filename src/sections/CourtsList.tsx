import React, { useState } from 'react';
import '../App.css';
import data from '../data/data.json';
import Court from '../components/Court';
import Pagenation from '../components/Pagenation';
import Filter from '../components/Filter';
import { AREAS, LIGHTS, TYPE, COURTS } from '../utils/filterItems';

function CourtsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [courtsPerPage] = useState(10);
  const [selectedArea, setSelectedArea] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [selectedLights, setSelectedLights] = useState<number | null>(null);
  const [selectedCourts, setSelectedCourts] = useState<number | null>(null);

  const filteredData = data.filter((court) => {
    let isValid = true;

    if (selectedArea !== null && court.area !== selectedArea) {
      isValid = false;
    }

    if (selectedType !== null && court.type !== selectedType) {
      isValid = false;
    }

    if (selectedLights !== null && court.lights !== (selectedLights === 0)) {
      isValid = false;
    }

    if (selectedCourts !== null) {
      if (selectedCourts === 0 && court.courts > 5) {
        isValid = false;
      } else if (selectedCourts === 1 && court.courts < 6) {
        isValid = false;
      }
    }

    return isValid;
  });

  const indexOfLastCourt = currentPage * courtsPerPage;
  const indexOfFirstCourt = indexOfLastCourt - courtsPerPage;
  const currentCourts = filteredData.slice(indexOfFirstCourt, indexOfLastCourt);

  return (
    <div className='courts-list-section'>
      <h2>Tennis Court Listings in Toronto Area</h2>
      <div className='filters'>
        <Filter data={AREAS} type='Area' onChange={setSelectedArea} />
        <Filter data={TYPE} type='Type' onChange={setSelectedType} />
        <Filter data={LIGHTS} type='Lights' onChange={setSelectedLights} />
        <Filter data={COURTS} type='Courts' onChange={setSelectedCourts} />
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
