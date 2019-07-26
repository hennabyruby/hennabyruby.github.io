import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const PageTemplate = ({ data, ...rest }) => (
  <Layout {...rest}>
    <SEO
      title={data.wordpressPage.title}
      description={data.wordpressPage.excerpt}
    />
    <section className="container">
      <h1 dangerouslySetInnerHTML={{ __html: data.wordpressPage.title }} />
      <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
    </section>
  </Layout>
)

export default PageTemplate
export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
    }
  }
`
