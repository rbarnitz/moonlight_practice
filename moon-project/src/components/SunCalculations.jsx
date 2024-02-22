import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoonIcon from './MoonIcon';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

//import suncalc library
import SunCalc from 'suncalc';

function SunCalculations(props) {
  //declaring useState variable for moon data we want to return
  const [moonData, setMoonData] = useState(null);

  // create useEffect to stop re-renders:

  //pull lat & long reducer info:
  const latReducer = useSelector(
    (store) => store.addCoordinatesReducer.latitude
  );
  const lngReducer = useSelector(
    (store) => store.addCoordinatesReducer.longitude
  );
  const locationReducer = useSelector(
    (store) => store.addCoordinatesReducer.searchedLocation
  );

  //convert date from props to be used in library
  const date = new Date(props.selectedDate);
  // const latitude = 37.7749; // Example latitude (San Francisco)
  // const longitude = -122.4194; // Example longitude (San Francisco)

  // Calculate sunrise and sunset times
  const times = SunCalc.getTimes(date, latReducer, lngReducer);
  const illumination = SunCalc.getMoonIllumination(date);
  const moonRiseSet = SunCalc.getMoonTimes(date, latReducer, lngReducer);

  //make illumination a percentage
  const illuminationPercentage = (illumination.fraction * 100).toFixed(0);

  const moonRise = moonRiseSet.rise;
  let moonSet = moonRiseSet.set;

  if (moonSet && typeof moonSet === 'undefined') {
    moonSet = 'undefined';
  }

  console.log('Sunrise:', times.sunrise);
  console.log('Sunset:', times.sunset);
  console.log('Moon illum is:', illumination.fraction);
  console.log('Moon Rise & Set is:', moonRiseSet.rise, moonSet);
  console.log('Latitude & Longitude are:', latReducer, lngReducer);

  useEffect(() => {
    //assigning correct moon data to variable
    setMoonData(illumination.phase);
  }, [props.selectedDate]);

  return (
    <>
      <MoonIcon moonData={moonData} />
      <p>Location is: {locationReducer}</p>
      <p>Moon Illumination is: {illuminationPercentage}%</p>
      <p>
        Moon Rise time is:{' '}
        {moonRiseSet.rise ? (
          moonRiseSet.rise.toLocaleTimeString()
        ) : (
          <Alert severity="info">No moon rise data found.</Alert>
        )}
      </p>
      {moonSet && <p>Moon Set time is: {moonSet.toLocaleTimeString()}</p>}{' '}
    </>
  );
}

export default SunCalculations;
