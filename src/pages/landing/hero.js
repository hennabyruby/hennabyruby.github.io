import React from 'react';
import get from 'lodash-es/get';
import classNames from 'classnames';
import { Link } from 'gatsby';

import style from './sass/hero.module.scss';

const Hero = ({ data }) => {
  const services = data.nodes;

  return (
    <section className={style.hero}>
      <article className={style.cover}>
        <a href="tel:07597081136" role="button" className={style.coverCta}>
          Book now
        </a>
      </article>
      <section className="container">
        <article>
          <h2 className={style.intro}>
            Hi, I am Ruby, an artist based in Hounslow, West London.
          </h2>

          <p className="lead">
            I love working with <strong>Henna</strong> and{' '}
            <strong>Face painting</strong>. I also draw, sketch and paint in
            variety of mediums covering subjects mostly from landscapes and
            abstract ideas.
          </p>

          <p>
            &raquo; <Link to="/about">More about my work</Link>
          </p>
        </article>

        <article className={classNames('section', style.booking)}>
          <h3>Get in touch</h3>
          <dl className={style.contact}>
            <dt>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
                width="20"
                height="20"
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
        </article>

        <article className="section">
          <h3>Services</h3>
          <p className="lead">
            I offer quality, fun and affordable service for both private and
            public appointments, events and parties.
          </p>
          <p>
            Bookings are available for any seasonal, personal and corporate
            social events. If you would to know more, please get in touch.
          </p>
          {services && (
            <ul className={style.serviceList}>
              {services.map((service) => (
                <li key={service.path}>
                  {get(
                    service,
                    'featured_media.localFile.childImageSharp.resize.src',
                    false,
                  ) && (
                    <img
                      className={style.thumbnail}
                      alt={service.title}
                      src={
                        service.featured_media.localFile.childImageSharp.resize
                          .src
                      }
                    />
                  )}
                  <h4
                    className={style.heading}
                    dangerouslySetInnerHTML={{ __html: service.title }}
                  />
                  <div
                    className={style.excerpt}
                    dangerouslySetInnerHTML={{ __html: service.excerpt }}
                  />
                </li>
              ))}
            </ul>
          )}
        </article>
      </section>
    </section>
  );
};

export default Hero;
