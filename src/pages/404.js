import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = (props) => (
  <Layout {...props}>
    <SEO title="Page Not found | Henna &amp; Face paint by Ruby" />
    <section className="container">
      <h1>Not found</h1>
      <p>
        The page you are looking for cannot be found. Try another option from{' '}
        <Link to="/">home page</Link>
      </p>
    </section>
  </Layout>
);

export default NotFoundPage;
