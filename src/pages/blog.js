import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

const BlogPage = props => {
  const { data, ...rest } = props

  return (
    <Layout {...rest}>
      <SEO title="Blog" />
      <section>
        {data.allWordpressPost.edges.map(post => (
          <Post post={post} />
        ))}
      </section>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          content
          slug
          path
          categories {
            wordpress_id
            name
            slug
            path
          }
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
