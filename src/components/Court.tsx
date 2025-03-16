import React from 'react';
import '../App.css';
import { formatTime } from '../utils/formatTime';

interface CourtProps {
  location: string;
  area: number;
  public_hrs: {
    day: number,
    hrs_from: number,
    hrs_to: number,
  }[] | null;
  winter_play: boolean;
  type: number;
  lights: boolean;
  courts: number;
}

function Court(props: CourtProps) {
  let area: string = '';
  switch(props.area) {
    case 0: area = 'Downtown'; break;
    case 1: area = 'East York'; break;
    case 2: area = 'Scarborough'; break;
    case 3: area = 'North York'; break;
    case 4: area = 'West'; break;
    default: area = 'Etobicoke'
  }

  let publicHours: string[] = [];
  if (props.public_hrs !== null) {
    for (const publicHr of props.public_hrs) {
      let day = '';
      switch(publicHr.day) {
        case 0: day = 'Sundays'; break;
        case 1: day = 'Mondays'; break;
        case 2: day = 'Tuesdays'; break;
        case 3: day = 'Wednesdays'; break;
        case 4: day = 'Thursdays'; break;
        case 5: day = 'Fridays'; break;
        case 6: day = 'Saturdays'; break;
        default: day = 'Holidays';
      }
      publicHours.push(`${day}: ${formatTime(publicHr.hrs_from)} - ${formatTime(publicHr.hrs_to)}`);
    }
  }

  return (
    <tr>
      <td data-title="Location">{props.location}</td>
      <td data-title="Area">{area}</td>
      <td data-title="Type">{props.type === 0 ? 'Public' : 'Club'}</td>
      <td data-title="Club Public Hrs">
        {publicHours.length === 0 ? ' ' 
        : <ul>
            {publicHours.map((ph: string, index: number) => 
              <li key={index}>{ph}</li>
            )}
          </ul>
        }
      </td>
      <td data-title="Courts">{props.courts}</td>
      <td data-title="Lights">{props.lights ? 'Yes' : 'No'}</td>
      <td data-title="Winter Pay">{props.winter_play ? 'Yes' : 'No'}</td>
    </tr>
  );
}

export default Court;
