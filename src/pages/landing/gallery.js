import React, { memo, useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './sass/gallery.module.scss';
import { Link } from 'gatsby';

const propTypes = { data: PropTypes.object, showMore: PropTypes.bool };
const defaultProps = { showMore: false };

const Modal = ({ onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    function handleKeyPress(ev) {
      if (ev.keyCode === 27) {
        window.document.removeEventListener('keydown', handleKeyPress);
        return onClose();
      }

      if (ev.type === 'click' && ev.target.classList.contains(style.inner)) {
        modalRef.current.addEventListener('click', handleKeyPress);
        return onClose();
      }
    }

    window.document.documentElement.classList.add('no-scroll');
    window.document.addEventListener('keydown', handleKeyPress);
    modalRef.current.addEventListener('click', handleKeyPress);

    return () => {
      window.document.documentElement.classList.remove('no-scroll');
      window.document.removeEventListener('keydown', handleKeyPress);
      modalRef.current.addEventListener('click', handleKeyPress);
    };
  }, []);

  return (
    <div ref={modalRef} className={style.modal}>
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
    <>
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
    </>
  );
};

Gallery.propTypes = propTypes;
Gallery.defaultProps = defaultProps;

export default memo(Gallery);
