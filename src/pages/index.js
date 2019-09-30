import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from './landing/hero';
import Clients from './landing/clients';
import Testimonials from './landing/testimonials';
import Contact from './landing/contact';

const IndexPage = ({ data, ...rest }) => (
  <Layout fluid isHomePage={true} {...rest}>
    <SEO title="Ruby Idrees – Henna & Face paint artist – Hounslow, West London" />
    <Hero data={data} />
    <Clients />
    <Testimonials />
    {/* <Contact /> */}
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
    allWordpressWpServices {
      nodes {
        link
        excerpt
        slug
        path
        title
        wordpress_id
        featured_media {
          localFile {
            childImageSharp {
              sizes {
                src
                srcSet
              }
              resize(width: 150, height: 150) {
                src
              }
            }
          }
        }
      }
    }
    allWordpressWpMedia(limit: 10, filter: { type: { eq: "attachment" } }) {
      edges {
        node {
          localFile {
            childImageSharp {
              thumbnail: resize(width: 250, height: 250, cropFocus: CENTER) {
                src
                width
                height
                originalName
              }
              medium: resize(width: 650, height: 650, cropFocus: CENTER) {
                src
                width
                height
                originalName
              }
              large: resize(width: 1024, height: 1024, cropFocus: CENTER) {
                src
                width
                height
                originalName
              }
            }
          }
        }
      }
    }
  }
`;
