import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Services from '../components/services';

const ServicesPage = ({ data, ...rest }) => (
  <Layout fluid {...rest}>
    <SEO title="Services | Henna &amp; Face paint by Ruby" />
    <div className="container">
      <Services services={data.allWordpressWpServices} />
    </div>
  </Layout>
);

export default ServicesPage;

export const query = graphql`
  query {
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
