import React, { useState, useEffect } from 'react';
import MoonIcon from './MoonIcon';

//import suncalc library
import SunCalc from 'suncalc';

function SunCalculations(props) {
  //declaring useState variable for moon data we want to return
  const [moonData, setMoonData] = useState(null);

  // create useEffect to stop re-renders:

  //convert date from props to be used in library
  const date = new Date(props.selectedDate);
  const latitude = 37.7749; // Example latitude (San Francisco)
  const longitude = -122.4194; // Example longitude (San Francisco)

  // Calculate sunrise and sunset times
  const times = SunCalc.getTimes(date, latitude, longitude);
  const illumination = SunCalc.getMoonIllumination(date);
  const moonRiseSet = SunCalc.getMoonTimes(date, latitude, longitude);

  const moonRise = moonRiseSet.rise;
  let moonSet = moonRiseSet.set;

  if (moonSet && typeof moonSet === 'undefined') {
    moonSet = 'undefined';
  }

  console.log('Sunrise:', times.sunrise);
  console.log('Sunset:', times.sunset);
  console.log('Moon illum is:', illumination.fraction);
  console.log('Moon Rise & Set is:', moonRiseSet.rise, moonSet);

  useEffect(() => {
    //assigning correct moon data to variable
    setMoonData(illumination.phase);
  }, [props.selectedDate]);

  return (
    <>
      <MoonIcon moonData={moonData} />
      <p>Moon Illumination is: {illumination.fraction}</p>
      <p>Moon phase is: {moonData}</p>
      <p>Moon Rise time is: {moonRiseSet.rise.toLocaleTimeString()}</p>
      {moonSet && <p>Moon Set time is: {moonSet.toLocaleTimeString()}</p>}
    </>
  );
}

export default SunCalculations;
