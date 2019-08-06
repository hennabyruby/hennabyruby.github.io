import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Post from '../components/post';
import Hero from './partials/hero';
import Clients from './partials/clients';

import style from './style.module.scss';

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
    <section className="container">
      <Hero />
      <Clients />
      {/* {data.allWordpressPost.edges.map(({ node }) => (
        <Post key={node.title} post={node} />
      ))} */}
      <h3>Testimonials</h3>
      <ul style={{ listStyle: 'none', padding: '1rem', margin: '0' }}>
        <li style={{ borderBottom: '1px solid var(--hbr-light-gray)' }}>
          <blockquote>
            We hired ruby for a children's party. I asked her to come for 4
            hours and do around 45 kids. But bless her on the day she ended up
            doing over 50 kids and adults and stayed and extra 1.5 hours. She
            worked non stop not wasting any time, she's very professional and
            talented. The kids and adults were all very happy with their designs
            :) she will defos be joining us on our future parties
          </blockquote>
          <cite>Zahra Mian</cite>
        </li>
        <li>
          <blockquote>
            Ruby came to our local church fayre and was fantastic a for the
            children and the adults. Very good prices and excellent work.
            Defently a must have at any party, social event or fayre. Thank you
            so much Ruby x
          </blockquote>
          <cite>Amber Dallas Cawte</cite>
        </li>
      </ul>
      <p>gallery</p>
      <ul>
        <li>
          <a href="/Hounslow">Henna and face painting in Hounslow</a>
        </li>
        <li>
          <a href="/West London">Henna and face painting in West London</a>
        </li>
        <li>
          <a href="/Isleworth">Henna and face painting in Isleworth</a>
        </li>
        <li>
          <a href="/Feltham">Henna and face painting in Feltham</a>
        </li>
        <li>
          <a href="/Heston">Henna and face painting in Heston</a>
        </li>
        <li>
          <a href="/Brentford">Henna and face painting in Brentford</a>
        </li>
        <li>
          <a href="/Southall">Henna and face painting in Southall</a>
        </li>
        <li>
          <a href="/Kew">Henna and face painting in Kew</a>
        </li>
        <li>
          <a href="/Chiswick">Henna and face painting in Chiswick</a>
        </li>
        <li>
          <a href="/Ealing">Henna and face painting in Ealing</a>
        </li>
      </ul>
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
