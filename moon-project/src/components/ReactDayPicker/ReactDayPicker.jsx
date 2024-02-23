import React, { useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

//important to keep styling transparent and aligned
import 'react-day-picker/dist/style.css';

export default function App() {
  const [range, setRange] = useState();

  let footer = <p>Pick a date!</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      footer = (
        <>
          <p>Selected dates:</p>
          <p>
            {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
          </p>
        </>
      );
      console.log('date range is:', footer);
    }
  }

  return (
    <>
      <h2>{footer}</h2>
      <br></br>
      <DayPicker
        mode="range"
        min={2}
        max={6}
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
      />
    </>
  );
}
