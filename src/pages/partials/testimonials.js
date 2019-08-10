import React from 'react';

import style from './style.module.scss';

const Testimonials = () => (
  <section className={style.testimonials}>
    <h3>Testimonials</h3>
    <article class={style.article}>
      <blockquote>
        We hired ruby for a children's party. I asked her to come for 4
        hours and do around 45 kids. But bless her on the day she ended up
        doing over 50 kids and adults and stayed and extra 1.5 hours. She
        worked non stop not wasting any time, she's very professional and
        talented. The kids and adults were all very happy with their designs
        :) she will defos be joining us on our future parties
        </blockquote>
      <cite>Zahra Mian</cite>
    </article>
    <article class={style.article}>
      <blockquote>
        Ruby came to our local church fayre and was fantastic a for the
        children and the adults. Very good prices and excellent work.
        Defently a must have at any party, social event or fayre. Thank you
        so much Ruby x
        </blockquote>
      <cite>Amber Dallas Cawte</cite>
    </article>
  </section>
);

export default Testimonials;