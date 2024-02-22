import * as React from 'react';
import dayjs from 'dayjs';
import './Calendar.css';

//MUI adaptors
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useHistory } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

//import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//Dynamic calendar
// import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';

function Calendar({ dateChange }) {
  const [value, setValue] = React.useState();

  console.log('date is', value);

  const handleDateChange = (newValue) => {
    let formattedDate = newValue.format('YYYY-MM-DD');
    //set new changed value
    dateChange(formattedDate);

    //formatting this date into a useable string
    //console.log('Formatted date is', newValue.format('YYYY-MM-DD'));

    //creating date function to pass value back to app
  };

  //will create and return a date range
  // <LocalizationProvider dateAdapter={AdapterDayjs}>
  //       <StaticDateRangePicker
  //       value={value}
  //       onChange={(newValue) => setValue(newValue)}
  //       />
  //     </LocalizationProvider>

  //linking to date pickers page
  let history = useHistory();

  function handleNext() {
    history.push('/reactdaypicker');
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          className="calendar"
          label="Moon Date Range"
          value={value}
          onChange={handleDateChange}
        />

        <Stack direction="row">
          <Button variant="outlined" onClick={handleNext}>
            Next
          </Button>
        </Stack>
      </LocalizationProvider>
    </>
  );
}

export default Calendar;
