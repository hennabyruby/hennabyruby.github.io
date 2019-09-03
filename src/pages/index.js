import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from './landing/hero';
import Clients from './landing/clients';
import Testimonials from './landing/testimonials';
import Gallery from './landing/gallery';

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
    <>
      <Hero data={data.allWordpressWpServices} />
      <Clients />
      <Testimonials />
      <Gallery />
    </>
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
  }
`;
