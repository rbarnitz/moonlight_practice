import React from 'react';
import './MoonIcon.css';

// new
import { WiMoonNew } from 'react-icons/wi';

// <WiMoonNew />
// <WiMoonWaxingCrescent1 />
// <WiMoonWaxingCrescent2 />
// <WiMoonWaxingCrescent3 />
// <WiMoonWaxingCrescent4 />
// <WiMoonWaxingCrescent5 />
// <WiMoonFirstQuarter />
// <WiMoonWaxingGibbous1 />
// <WiMoonWaxingGibbous2 />
// <WiMoonWaxingGibbous3 />
// <WiMoonWaxingGibbous4 />
// <WiMoonWaxingGibbous5 />
// <WiMoonFull />
// <WiMoonWaningGibbous1 />
// <WiMoonWaningGibbous2 />
// <WiMoonWaningGibbous3 />
// <WiMoonWaningGibbous4 />
// <WiMoonWaningGibbous5 />
// <WiMoonThirdQuarter />
// <WiMoonWaningCrescent1 />
// <WiMoonWaningCrescent2 />
// <WiMoonWaningCrescent3 />
// <WiMoonWaningCrescent4 />
// <WiMoonWaningCrescent5 />

//waxing crescent
import {
  WiMoonWaxingCrescent1,
  WiMoonWaxingCrescent2,
  WiMoonWaxingCrescent3,
  WiMoonWaxingCrescent4,
  WiMoonWaxingCrescent5,
} from 'react-icons/wi';

//First Quarter
import { WiMoonFirstQuarter } from 'react-icons/wi';

//waxing gibbous
import {
  WiMoonWaxingGibbous1,
  WiMoonWaxingGibbous2,
  WiMoonWaxingGibbous3,
  WiMoonWaxingGibbous4,
  WiMoonWaxingGibbous5,
} from 'react-icons/wi';

//full
import { WiMoonFull } from 'react-icons/wi';

//waning gibbous
import {
  WiMoonWaningGibbous1,
  WiMoonWaningGibbous2,
  WiMoonWaningGibbous3,
  WiMoonWaningGibbous4,
  WiMoonWaningGibbous5,
} from 'react-icons/wi';

//Third quarter
import { WiMoonThirdQuarter } from 'react-icons/wi';

//waning crescent
import {
  WiMoonWaningCrescent1,
  WiMoonWaningCrescent2,
  WiMoonWaningCrescent3,
  WiMoonWaningCrescent4,
  WiMoonWaningCrescent5,
} from 'react-icons/wi';

const moonComponents = [
  WiMoonNew,
  WiMoonNew,
  WiMoonNew,
  WiMoonWaxingCrescent1,
  WiMoonWaxingCrescent2,
  WiMoonWaxingCrescent3,
  WiMoonWaxingCrescent4,
  WiMoonWaxingCrescent5,
  WiMoonFirstQuarter,
  WiMoonWaxingGibbous1,
  WiMoonWaxingGibbous2,
  WiMoonWaxingGibbous3,
  WiMoonWaxingGibbous4,
  WiMoonWaxingGibbous5,
  WiMoonFull,
  WiMoonFull,
  WiMoonFull,
  WiMoonWaningGibbous1,
  WiMoonWaningGibbous2,
  WiMoonWaningGibbous3,
  WiMoonWaningGibbous4,
  WiMoonWaningGibbous5,
  WiMoonThirdQuarter,
  WiMoonWaningCrescent1,
  WiMoonWaningCrescent2,
  WiMoonWaningCrescent3,
  WiMoonWaningCrescent4,
  WiMoonWaningCrescent5,
];

function MoonIcon(moonData) {
  console.log('MoonIcon says: ', moonData.moonData);

  const index = Math.floor(moonData.moonData * moonComponents.length);

  console.log('moon icon is:', moonComponents[index]);
  let moonIconNow = moonComponents[index];

  return (
    <>
      <div className="moon-icon">{React.createElement(moonIconNow)}</div>
    </>
  );
}

export default MoonIcon;
