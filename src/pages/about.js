import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = props => (
  <Layout {...props}>
    <SEO title="About Henna & Face paint by Ruby" />
    <h1>About Ruby</h1>
    <p>
      Ruby is an experienced artist specialized in Henna and face painting with
      an experience of over 10 and 3 years respectively.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
