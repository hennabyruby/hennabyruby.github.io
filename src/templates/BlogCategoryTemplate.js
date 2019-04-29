import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressCategory.name}
      description={data.wordpressCategory.description}
    />
    <h1>{data.wordpressCategory.name}</h1>
    <p>{data.wordpressCategory.description}</p>
    <p>
      <small>
        There are <span>{data.allWordpressPost.totalCount}</span>{" "}
        {data.allWordpressPost.totalCount === 1 ? "post" : "posts"} for this
        category.
      </small>
    </p>
    <hr />
    {data.allWordpressPost.edges.map(post => (
      <article>
        <h2>{post.node.title}</h2>
        <p>{post.node.excerpt}</p>
        <a href={post.node.path}>Read the post</a>
      </article>
    ))}
  </Layout>
)
export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressCategory(wordpress_id: { eq: $id }) {
      name
      description
    }
    allWordpressPost(
      filter: { categories: { elemMatch: { wordpress_id: { in: [$id] } } } }
    ) {
      totalCount
      edges {
        node {
          wordpress_id
          path
          title
          excerpt
        }
      }
    }
  }
`
