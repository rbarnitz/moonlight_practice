import * as React from 'react';
import illuminanceData from './IlluminanceData';

function Illuminance(props) {
  const date = props.selectedDate;

  console.log(props.selectedDate);
  console.log('input date is:', Date(props.selectedDate));

  const moonData = illuminanceData.find((item) => item.date === date);

  console.log('illum component says', moonData, date);

  return <p>Moon Brightness this date: {moonData.illuminance} </p>;
}

export default Illuminance;
