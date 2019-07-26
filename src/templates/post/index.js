import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Post from "../../components/post"

const PostTemplate = ({ data, ...rest }) => (
  <Layout {...rest}>
    <section className="container">
      <Post
        key={data.wordpressPost.wordpress_id}
        isSinglePost
        post={data.wordpressPost}
      />
    </section>
  </Layout>
)

export default PostTemplate
export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      wordpress_id
      title
      content
      excerpt
      path
      link
      date(formatString: "MMMM DD, YYYY")
      comment_status
      categories {
        wordpress_id
        name
        description
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
`
