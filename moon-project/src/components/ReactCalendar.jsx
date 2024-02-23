import React, { useState } from 'react';

import { format } from 'date-fns';
import dayjs from 'dayjs';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useHistory } from 'react-router-dom';

//mui components
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ReactCalendar({ dateChange }) {
  const [selectedDay, setSelectedDay] = useState();

  //format date to YYY-MM-DD format
  let formattedDate = dayjs(selectedDay).format('YYYY-MM-DD');
  console.log('formatted date is: ', formattedDate);

  //send up as a prop
  dateChange(formattedDate);

  //show date in footer
  const footer = selectedDay ? (
    <p>{format(selectedDay, 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  let history = useHistory();

  function handleNext() {
    history.push('/reactdaypicker');
  }

  return (
    <>
      <DayPicker
        mode="single"
        selected={selectedDay}
        onSelect={setSelectedDay}
        footer={footer}
      />
      <Stack direction="row">
        <Button variant="outlined" onClick={handleNext}>
          Next
        </Button>
      </Stack>
    </>
  );
}

export default ReactCalendar;
