import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Gallery from './landing/gallery';

const GalleryPage = ({ data, ...rest }) => (
  <Layout fluid {...rest}>
    <SEO title="Gallery | Henna &amp; Face paint by Ruby" />
    <Gallery data={data.allWordpressWpMedia} />
  </Layout>
);

export default GalleryPage;

export const query = graphql`
  query {
    allWordpressWpMedia(limit: 10) {
      edges {
        node {
          localFile {
            childImageSharp {
              resize(width: 250, height: 250) {
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
