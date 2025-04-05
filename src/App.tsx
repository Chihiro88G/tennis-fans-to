import React from 'react';
import './App.css';
import Top from './sections/Top';
import CourtsList from './sections/CourtsList';
import Meetup from './sections/Meetup';

function App() {
  return (
    <div>
      <Top />
      <CourtsList />
      <Meetup />
    </div>
  );
}

export default App;
