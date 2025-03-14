import React from 'react';
import '../App.css';

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
              <th>Club Public Hrs</th>
              <th>Courts</th>
              <th>Lights</th>
              <th>Winter Play</th>
            </tr>
          </thead>
          <tr>
            <td data-title="Location">Scarborough Blufs</td>
            <td data-title="Area">Scarborough</td>
            <td data-title="Club Public Hrs">sth</td>
            <td data-title="Courts">5</td>
            <td data-title="Lights">Yes</td>
            <td data-title="Winter Pay">No</td>
          </tr>
          <tr>
            <td data-title="Location">Ramsden Park</td>
            <td data-title="Area">Downtown</td>
            <td data-title="Club Public Hrs">sth</td>
            <td data-title="Courts">12</td>
            <td data-title="Lights">No</td>
            <td data-title="Winter Pay">No</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default CourtsList;
