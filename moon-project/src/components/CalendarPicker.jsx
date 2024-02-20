import { useState } from 'react';

import Calendar from 'react-calendar';

//importing styling for calendar
import 'react-calendar/dist/Calendar.css';
import './CalendarPicker.css';

//To Do:
// Select month
// Pull all compatible days for that month
//Send dates to an array, to then display in the calendar


function CalendarPicker() {
  //testing dates for formatting
  const testDates = ['07-02-2024', '08-02-2024', '15-02-2024'];


  //set dates to a useable format

  return <Calendar />;
}

export default CalendarPicker;
