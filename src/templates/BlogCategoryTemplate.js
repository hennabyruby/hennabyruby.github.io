import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext }) => (
  <Layout>
    <SEO
      title={data.wordpressCategory.name}
      description={data.wordpressCategory.description}
    />
    <h1>{data.wordpressCategory.name}</h1>
    <p>{data.wordpressCategory.description}</p>
    {(pageContext &&
      pageContext.posts.length &&
      pageContext.posts.map(post => {
        return (
          <article>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </article>
        )
      })) ||
      ""}
  </Layout>
)
export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressCategory(wordpress_id: { eq: $id }) {
      name
      description
    }
  }
`
