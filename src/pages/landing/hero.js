import React, { memo } from 'react';
import get from 'lodash-es/get';
import classNames from 'classnames';

import Gallery from './gallery';
import style from './sass/hero.module.scss';

const Hero = ({ data }) => {
  return (
    <section className={classNames('section', style.hero)}>
      <article className="container">
        <h2 className={style.intro}>
          Hi, I am Ruby, an artist based in Hounslow, West London.
        </h2>

        <p className="lead">
          I love working with <strong>Henna</strong> and{' '}
          <strong>Face painting</strong>. I also draw, sketch and paint in a
          variety of mediums covering subjects mostly from landscapes and
          abstract ideas.
        </p>
      </article>

      <article className="container">
        <p>
          Here are some photos of recent work including Henna, face painting,
          glitter tattoos and more.
        </p>
        <Gallery data={data.allWordpressWpMedia} />
      </article>

      <article className="container">
        <h3>Services</h3>
        <p className="lead">
          I offer quality, fun and affordable service for both private and
          public appointments, events and parties.
        </p>
        <p>
          Bookings are available for any seasonal, personal, social and
          corporate events. If you would like to know more; get in touch.
        </p>
        {data &&
          data.allWordpressWpServices &&
          data.allWordpressWpServices.nodes && (
            <ul className={style.serviceList}>
              {data.allWordpressWpServices.nodes.map((service) => (
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

      {/* <article className={style.cover}></article> */}
    </section>
  );
};

export default memo(Hero);
