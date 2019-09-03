import React from 'react';
import classNames from 'classnames';

import style from './sass/testimonials.module.scss';

const Star = ({ size = 32, color = 'black' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 1024 1024"
    fill={color}
    className={style.star}
  >
    <path d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z" />
  </svg>
);

const FiveStars = () => [...Array(5)].map((e, i) => <Star color="#a98c2d" />);

const FeedbackSource = () => (
  <small className={style.small}>
    From{' '}
    <a
      href="https://www.facebook.com/hennabyruby"
      target="_blank"
      rel="noopener"
    >
      Facebook page &raquo;
    </a>
  </small>
);

const Testimonials = () => (
  <div className={style.testimonials}>
    <h3 className="dimTitle">What clients are saying</h3>
    <section className={classNames('container', style.articles)}>
      <article className={style.article}>
        <blockquote className={style.blockquote}>
          We hired ruby for a children's party. I asked her to come for 4 hours
          and do around 45 kids. But bless her on the day she ended up doing
          over 50 kids and adults and stayed and extra 1.5 hours. She worked non
          stop not wasting any time, she's very professional and talented. The
          kids and adults were all very happy with their designs :) she will
          defos be joining us on our future parties
        </blockquote>
        <div className={style.stars}>
          <FiveStars />
        </div>
        <cite className={style.cite}>Zahra Mian</cite>
        <FeedbackSource />
      </article>
      <article className={style.article}>
        <blockquote className={style.blockquote}>
          Ruby came to our local church fayre and was fantastic a for the
          children and the adults. Very good prices and excellent work. Defently
          a must have at any party, social event or fayre. Thank you so much
          Ruby x
        </blockquote>
        <div className={style.stars}>
          <FiveStars />
        </div>
        <cite className={style.cite}>Amber Dallas Cawte</cite>
        <FeedbackSource />
      </article>
      <article className={style.article}>
        <blockquote className={style.blockquote}>
          Ruby came to our local church fayre and was fantastic a for the
          children and the adults. Very good prices and excellent work. Defently
          a must have at any party, social event or fayre. Thank you so much
          Ruby x
        </blockquote>
        <div className={style.stars}>
          <FiveStars />
        </div>
        <cite className={style.cite}>Amber Dallas Cawte</cite>
        <FeedbackSource />
      </article>
      <article className={style.article}>
        <blockquote className={style.blockquote}>
          Ruby came to our local church fayre and was fantastic a for the
          children and the adults. Very good prices and excellent work. Defently
          a must have at any party, social event or fayre. Thank you so much
          Ruby x
        </blockquote>
        <div className={style.stars}>
          <FiveStars />
        </div>
        <cite className={style.cite}>Amber Dallas Cawte</cite>
        <FeedbackSource />
      </article>
    </section>
  </div>
);

export default Testimonials;
