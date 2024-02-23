import React, { useState, useEffect } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import Header from './components/Header';
import MoonIcon from './components/MoonIcon';
import SunCalculations from './components/SunCalculations';
import Location from './components/Location';
import Illuminance from './components/Illuminance';
import CalendarPicker from './components/CalendarPicker/CalendarPicker';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDayPicker from './components/ReactDayPicker/ReactDayPicker';
import ReactCalendar from './components/ReactCalendar';

//may be removed later
import TestLanding from './components/TestLanding';

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
      <Router>
        <Switch>
          <Route path="/" exact>
            <Location />
          </Route>

          <Route path="/reactdaypicker" exact component={ReactDayPicker} />
          <Route
            path="/calendar"
            exact
            render={() => (
              <div className="card">
                <ReactCalendar dateChange={handleDateChange} />
                {selectedDate && (
                  <SunCalculations selectedDate={selectedDate} />
                )}
              </div>
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
