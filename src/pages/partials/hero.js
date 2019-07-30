import React from 'react';
import { Link } from 'gatsby';

import style from './style.module.scss';

const Hero = () => (
  <div className={style.hero}>
    <div className={style.cover}>
      <a href="tel:07597081136" type="buttton" className={style.coverCta}>
        Book now
      </a>
    </div>
    <div className={style.services}>
      <h2>Hi, I am Ruby</h2>
      <p>Artist based in London Borough of Hounslow</p>
      <p>
        I love working with Henna and Face painting. I also draw, sketch and
        paint in variety of mediums covering subjects mostly from landscapes and
        abstract ideas. <Link to="/about">Read more about me...</Link>
      </p>

      <h3>Services</h3>
      <ul className={style.serviceList}>
        <li>Henna</li>
        <li>Bridal Henna</li>
        <li>Face painting</li>
        <li>Glitter Tattoo</li>
      </ul>
    </div>
  </div>
);

export default Hero;
