import * as React from 'react';
import dayjs from 'dayjs';

//MUI adaptors
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        label="Moon Date"
        value={value}
        onChange={handleDateChange}
      />
    </LocalizationProvider>
  );
}

export default Calendar;
