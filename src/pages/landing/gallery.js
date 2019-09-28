import React, { memo, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './sass/gallery.module.scss';
import { Link } from 'gatsby';

const propTypes = { data: PropTypes.object, showMore: PropTypes.bool };
const defaultProps = { showMore: false };

const Modal = ({ onClose, children }) => {
  return (
    <div className={style.modal}>
      <button className={style.close} type="button" onClick={onClose}>
        &times;
      </button>
      <div className={style.inner}>{children}</div>
    </div>
  );
};

const Gallery = ({ data, showMore }) => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openImage = (ev) => {
    ev.preventDefault();
    setSelected(ev.target.dataset.src);
    setOpen(true);
  };

  const closeImage = (ev) => {
    setSelected(null);
    setOpen(false);
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
              <a
                className={style.anchor}
                key={node.localFile.childImageSharp.thumbnail.originalName}
                onClick={openImage}
                href={node.localFile.childImageSharp.medium.src}
              >
                <img
                  loading={i > 3 ? 'lazy' : 'auto'}
                  className={style.thumbnail}
                  width={node.localFile.childImageSharp.thumbnail.width}
                  height={node.localFile.childImageSharp.thumbnail.height}
                  src={node.localFile.childImageSharp.thumbnail.src}
                  data-src={node.localFile.childImageSharp.medium.src}
                  alt=""
                />
              </a>
            ))}
          </div>
        )}
        {isOpen && (
          <Modal onClose={closeImage}>
            <img src={selected} alt="" />
          </Modal>
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

export default memo(Gallery);
