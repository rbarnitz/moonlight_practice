import * as React from 'react';
import dayjs from 'dayjs';

//MUI adaptors
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useHistory } from 'react-router-dom';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
    history.push('/calendarpicker');
  }

  return (
    <>
      <p> Hello from Calendar</p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          label="Moon Date Range"
          value={value}
          onChange={handleDateChange}
        />

        <button onClick={handleNext}>Let's pick some dates!</button>
      </LocalizationProvider>
    </>
  );
}

export default Calendar;
