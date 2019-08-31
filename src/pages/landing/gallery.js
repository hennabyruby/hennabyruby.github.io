import React from 'react';
import classNames from 'classnames';

import style from './sass/gallery.module.scss';

const Gallery = () => (
  <section className={classNames('section', style.gallery)}>
    <div className="container">
      <h3>Gallery</h3>
      <p>gallery content here</p>
    </div>
  </section>
);

export default Gallery;
