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
    <Hero />
    <Clients />
    <section className="container">
      {/* {data.allWordpressPost.edges.map(({ node }) => (
        <Post key={node.title} post={node} />
      ))} */}
      <p>testimonial</p>
      <p>gallery</p>
      <ul>
        <li>Henna and face painting in Hounslow</li>
        <li>Henna and face painting in West London</li>
        <li>Henna and face painting in Isleworth</li>
        <li>Henna and face painting in Feltham</li>
        <li>Henna and face painting in Heston</li>
        <li>Henna and face painting in Brentford</li>
        <li>Henna and face painting in Southall</li>
        <li>Henna and face painting in Kew</li>
        <li>Henna and face painting in Chiswick</li>
        <li>Henna and face painting in Ealing</li>
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
