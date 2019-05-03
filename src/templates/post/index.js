import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Post from "../../components/post"

// import style from "./style.module.scss"

const PostTemplate = ({ data, ...rest }) => (
  <Layout {...rest}>
    <Post
      key={data.wordpressPost.wordpress_id}
      isSinglePost
      post={data.wordpressPost}
    />
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
      date(formatString: "MMMM DD, YYYY")
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
