import React from "react"
import { graphql } from "gatsby"

import style from "./style.module.scss"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Post from "../../components/post"

const TagTemplate = ({ data, ...rest }) => {
  const { totalCount } = data.allWordpressPost

  return (
    <Layout {...rest}>
      <SEO
        title={data.wordpressTag.name}
        description={data.wordpressTag.description}
      />
      <p className={style.label}>Tag</p>
      <h1 className={style.heading}>{data.wordpressTag.name}</h1>
      {data.wordpressTag.description && (
        <p
          dangerouslySetInnerHTML={{ __html: data.wordpressTag.description }}
        />
      )}
      <p>
        {`There ${totalCount === 1 ? "is" : "are"} ${totalCount} ${
          totalCount === 1 ? "post" : "posts"
        } for this tag.`}
      </p>
      {data.allWordpressPost.edges.map(post => (
        <Post key={post.node.wordpress_id} post={post.node} />
      ))}
    </Layout>
  )
}

export default TagTemplate
export const query = graphql`
  query($id: Int!) {
    wordpressTag(wordpress_id: { eq: $id }) {
      name
      description
    }
    allWordpressPost(
      filter: { tags: { elemMatch: { wordpress_id: { in: [$id] } } } }
    ) {
      totalCount
      edges {
        node {
          wordpress_id
          title
          excerpt
          content
          slug
          path
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
