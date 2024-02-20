import React, { useState, useEffect } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import Header from './components/Header';
import MoonIcon from './components/MoonIcon';
import SunCalculations from './components/SunCalculations';
import Location from './components/Location';
import Illuminance from './components/Illuminance';
import CalendarPicker from './components/CalendarPicker';

//logos

function App() {
  const [selectedDate, setSelectedDate] = useState();
  const [moonPhase, setMoonPhase] = useState();

  useEffect(() => {
    if (selectedDate) {
      console.log('Selected date in App:', selectedDate);
    }
  }, [selectedDate]);

  const handleDateChange = (date) => {
    console.log('Selected date in App:', selectedDate);
    setSelectedDate(date);
  };

  return (
    <>
      <Header />
      <CalendarPicker />
      <Location />
      <div className="card">
        <h1>Moon Data Tests</h1>
        <Calendar dateChange={handleDateChange} />
      </div>
      {selectedDate && <SunCalculations selectedDate={selectedDate} />}
    </>
  );
}

export default App;
