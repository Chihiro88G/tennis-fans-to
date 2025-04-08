import React from 'react';
import './App.css';
import Top from './sections/Top';
import CourtsList from './sections/CourtsList';
import Meetup from './sections/Meetup';
import Footer from './sections/Footer';

function App() {
  return (
    <div>
      <Top />
      <CourtsList />
      <Meetup />
      <Footer />
    </div>
  );
}

export default App;
