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
