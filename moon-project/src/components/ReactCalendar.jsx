import React, { useState } from 'react';

import { format } from 'date-fns';
import dayjs from 'dayjs';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function ReactCalendar({ dateChange }) {
  const [selectedDay, setSelectedDay] = useState();

  //format date to YYY-MM-DD format
  let formattedDate = dayjs(selectedDay).format('YYYY-MM-DD');
  console.log('formatted date is: ', formattedDate);

  //send up as a prop
  dateChange(formattedDate);

  const footer = selectedDay ? (
    <p>{format(selectedDay, 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  return (
    <DayPicker
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer}
    />
  );
}

export default ReactCalendar;
