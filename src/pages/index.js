import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Post from '../components/post';

import style from './style.module.scss';

const Hero = () => (
  <div className={style.hero}>
    <div className={style.cover}>
      <a href="tel:07597081136" type="buttton" className={style.coverCta}>
        Book now
      </a>
    </div>
    <div className={style.services}>
      <h2>Hi, I am Ruby</h2>
      <p>Artist based in London Borough of Hounslow</p>
      <p>
        I love working with Henna and Face painting. I also draw, sketch and
        paint in variety of mediums covering subjects mostly from landscapes and
        abstract ideas. <Link to="/about">Read more about me...</Link>
      </p>

      <h3>Services</h3>
      <ul className={style.serviceList}>
        <li>Henna</li>
        <li>Bridal Henna</li>
        <li>Face painting</li>
        <li>Glitter Tattoo</li>
      </ul>
    </div>
  </div>
);

const IndexPage = ({ data, ...rest }) => (
  <Layout fluid isHomePage={true} {...rest}>
    <SEO
      title="Ruby Idrees – Henna & Face paint artist – Hounslow, West London"
      keywords={[
        `henna`,
        `mendhi`,
        `bridal henna`,
        `art`,
        `glitter tattoos`,
        `tattoos`,
        `henna artist in Hounslow`,
        `henna artist in London`,
        `henna Hounslow`,
        `henna Southall`,
        `henna London`,
      ]}
    />
    <Hero />
    <section className="container">
      {/* {data.allWordpressPost.edges.map(({ node }) => (
        <Post key={node.title} post={node} />
      ))} */}
      <p>clients</p>
      <p>testimonial</p>
      <p>gallery</p>
    </section>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          path
          author
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;
