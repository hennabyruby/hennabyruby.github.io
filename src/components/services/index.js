import React from 'react';
import get from 'lodash-es/get';

import style from './style.module.scss';

const Services = ({ services }) => {
  if (!services || !services.nodes || !Boolean(services.nodes.length)) {
    return null;
  }

  return (
    <ul className={style.serviceList}>
      {services.nodes.map((service) => (
        <li key={service.path}>
          {get(
            service,
            'featured_media.localFile.childImageSharp.resize.src',
            false
          ) && (
            <img
              className={style.thumbnail}
              alt={service.title}
              src={service.featured_media.localFile.childImageSharp.resize.src}
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
  );
};

export default Services;
