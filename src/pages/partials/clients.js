import React from 'react';

import style from './style.module.scss';

import brightSunTravel from '../../images/clients/bright-sun-travel-logo.png';
import ratePeople from '../../images/clients/rated-people-logo.png';
import sky from '../../images/clients/sky-logo.png';
import southlandsArts from '../../images/clients/southlands-arts-logo.png';
import tesco from '../../images/clients/tesco-logo.png';
import uktv from '../../images/clients/uk-tv-logo.png';

const Clients = () => (
  <div className={style.clients}>
    <h3 className={style.title}>Trusted By</h3>
    <ul className={style.list}>
      <li>
        <img height="40px" src={brightSunTravel} alt="brightSunTravel" />
      </li>
      <li>
        <img height="40px" src={southlandsArts} alt="southlandsArts" />
      </li>
      <li>
        <img height="40px" src={sky} alt="sky" />
      </li>
      <li>
        <img height="40px" src={tesco} alt="tesco" />
      </li>
      <li>
        <img height="40px" src={ratePeople} alt="ratePeople" />
      </li>
      <li>
        <img height="40px" src={uktv} alt="uktv" />
      </li>
    </ul>
  </div>
);

export default Clients;
