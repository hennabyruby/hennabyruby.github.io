import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Post from '../components/post';
import Hero from './partials/hero';
import Clients from './partials/clients';
import Testimonials from './partials/testimonials';
import Gallery from './partials/gallery';

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
      <Testimonials />
      <Gallery />
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
