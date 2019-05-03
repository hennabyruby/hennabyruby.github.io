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
          <Post key={post.node.wordpress_id} post={post} />
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
          wordpress_id
          title
          excerpt
          content
          slug
          path
          date(formatString: "MMMM DD, YYYY")
          categories {
            wordpress_id
            name
            slug
            path
          }
          tags {
            wordpress_id
            name
            slug
            path
          }
        }
      }
    }
  }
`
