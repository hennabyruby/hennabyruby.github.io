import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      The page you are looking for cannot be found. Try another option from{" "}
      <Link to="/">home page</Link>
    </p>
  </Layout>
)

export default NotFoundPage
