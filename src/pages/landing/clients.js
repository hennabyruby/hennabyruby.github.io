import React from 'react';

import brightSunTravel from './images/bright-sun-travel-logo.png';
import ratePeople from './images/rated-people-logo.png';
import sky from './images/sky-logo.png';
import southlandsArts from './images/southlands-arts-logo.png';
import tesco from './images/tesco-logo.png';
import uktv from './images/uk-tv-logo.png';

import style from './sass/clients.module.scss';

const Clients = () => (
  <div className={style.clients}>
    <h3 className={style.dimTitle}>Trusted By</h3>
    <ul className="unstyled inline">
      <li>
        <img
          className={style.clientLogos}
          height="40px"
          src={brightSunTravel}
          alt="brightSunTravel"
        />
      </li>
      <li>
        <img
          className={style.clientLogos}
          height="40px"
          src={southlandsArts}
          alt="southlandsArts"
        />
      </li>
      <li>
        <img className={style.clientLogos} height="40px" src={sky} alt="sky" />
      </li>
      <li>
        <img
          className={style.clientLogos}
          height="40px"
          src={tesco}
          alt="tesco"
        />
      </li>
      <li>
        <img
          className={style.clientLogos}
          height="40px"
          src={ratePeople}
          alt="ratePeople"
        />
      </li>
      <li>
        <img
          className={style.clientLogos}
          height="40px"
          src={uktv}
          alt="uktv"
        />
      </li>
    </ul>
  </div>
);

export default Clients;
