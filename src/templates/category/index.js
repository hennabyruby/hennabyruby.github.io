import React from "react"
import { graphql } from "gatsby"

import style from "./style.module.scss"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Post from "../../components/post"

const CategoryTemplate = ({ data, ...rest }) => (
  <Layout {...rest}>
    <SEO
      title={data.wordpressCategory.name}
      description={data.wordpressCategory.description}
    />
    <p className={style.label}>Category</p>
    <h1 className={style.heading}>{data.wordpressCategory.name}</h1>
    {data.wordpressCategory.description && (
      <p
        dangerouslySetInnerHTML={{ __html: data.wordpressCategory.description }}
      />
    )}
    <p>
      There are <span>{data.allWordpressPost.totalCount}</span>{" "}
      {data.allWordpressPost.totalCount === 1 ? "post" : "posts"} for this
      category.
    </p>
    {data.allWordpressPost.edges.map(post => (
      <Post key={post.node.wordpress_id} post={post} />
    ))}
  </Layout>
)

export default CategoryTemplate
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
          title
          excerpt
          content
          slug
          path
          date(formatString: "MMMM DD, YYYY")
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
