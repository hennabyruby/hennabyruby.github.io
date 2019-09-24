import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './sass/gallery.module.scss';
import { Link } from 'gatsby';

const propTypes = { data: PropTypes.object, showMore: PropTypes.bool };
const defaultProps = { showMore: false };

const Gallery = ({ data, showMore }) => {
  const images = data.edges;

  const openImage = (ev) => {
    console.log(ev.target);
  };

  return (
    <section className={classNames('section', style.gallery)}>
      <div className="container">
        <h3>Gallery</h3>
        <p className="lead">
          Here are some photos of my work including Henna, Face painting,
          Glitter tattoos and more.
        </p>
        {data && data.edges && Boolean(data.edges.length) && (
          <div className={style.media}>
            {data.edges.map(({ node }, i) => (
              <img
                loading={i > 3 ? 'lazy' : 'auto'}
                className={style.img}
                key={node.localFile.childImageSharp.thumbnail.originalName}
                width={node.localFile.childImageSharp.thumbnail.width}
                height={node.localFile.childImageSharp.thumbnail.height}
                src={node.localFile.childImageSharp.thumbnail.src}
                data-src={node.localFile.childImageSharp.medium.src}
                alt=""
                onClick={openImage}
              />
            ))}
          </div>
        )}
        {showMore && (
          <p>
            <Link to="/gallery">&raquo; View more</Link>
          </p>
        )}
      </div>
    </section>
  );
};

Gallery.propTypes = propTypes;
Gallery.defaultProps = defaultProps;

export default Gallery;
