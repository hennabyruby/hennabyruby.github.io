import React from 'react';
import { Link } from 'gatsby';

import style from './sass/hero.module.scss';

const Hero = () => (
  <div className={style.hero}>
    <div className={style.cover}>
      <a href="tel:07597081136" role="button" className={style.coverCta}>
        Book now
      </a>
    </div>
    <div className={style.services}>
      <h2>
        Hi, I am Ruby
        <div className={style.subtitle}>
          Artist based in London Borough of Hounslow.
        </div>
      </h2>

      <p>
        I love working with <strong>Henna</strong> and{' '}
        <strong>Face painting</strong>. I also draw, sketch and paint in variety
        of mediums covering subjects mostly from landscapes and abstract ideas.
      </p>

      <p>
        &raquo; <Link to="/about">More about my work</Link>
      </p>

      <hr />
      <h3>Get in touch</h3>
      <dl className={style.contact}>
        <dt>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="var(--hbr-gray)"
              d="M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128S256 64 192 64 0 256 0 256c0 128 131.5 387.5 256 512s384 256 512 256c0 0 192-128 192-192S768 576 704 640z"
            />
          </svg>
        </dt>
        <dd>
          <a href="tel:07597081126">07597081126</a>
        </dd>
      </dl>
      <dl className={style.contact}>
        <dt>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="var(--hbr-gray)"
              d="M928 128h-832c-52.8 0-96 43.2-96 96v640c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-640c0-52.8-43.2-96-96-96zM398.74 550.372l-270.74 210.892v-501.642l270.74 290.75zM176.38 256h671.24l-335.62 252-335.62-252zM409.288 561.698l102.712 110.302 102.71-110.302 210.554 270.302h-626.528l210.552-270.302zM625.26 550.372l270.74-290.75v501.642l-270.74-210.892z"
            />
          </svg>
        </dt>
        <dd>
          <a href="mailto:ruby@preciousredstone.com?subject=Booking%20enquiry">
            ruby@preciousredstone.com
          </a>
        </dd>
      </dl>

      <hr />
      <h3>Services</h3>
      <p>
        Bookings are available for any seasonal, personal and corporate social
        events.
      </p>
      <p>
        <strong>Services offered</strong>
      </p>
      <ul className={style.serviceList}>
        <li>Henna art</li>
        <li>Bridal Henna</li>
        <li>Face painting</li>
        <li>Glitter tattoos</li>
      </ul>
    </div>
  </div>
);

export default Hero;
