import React from 'react';
import classNames from 'classnames';

import style from './sass/gallery.module.scss';
import { Link } from 'gatsby';

const Gallery = ({ data }) => {
  return (
    <section className={classNames('section', style.gallery)}>
      <div className="container">
        <h3>Gallery</h3>
        <p className="lead">
          Here are some photos of my work including Henna, Face painting,
          Glitter tattoos and more.
        </p>
        {data && data.edges && data.edges.length > 0 && (
          <div className={style.media}>
            {data.edges.map(({ node }) => (
              <img
                className={style.img}
                key={node.localFile.childImageSharp.resize.originalName}
                width={node.localFile.childImageSharp.resize.width}
                height={node.localFile.childImageSharp.resize.height}
                src={node.localFile.childImageSharp.resize.src}
                alt=""
              />
            ))}
          </div>
        )}
        <p>
          <Link to="/gallery">&raquo; View more</Link>
        </p>
      </div>
    </section>
  );
};

export default Gallery;
