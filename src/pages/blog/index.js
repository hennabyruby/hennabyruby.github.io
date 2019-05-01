import React from "react"
import { graphql, Link } from "gatsby"

import style from "./style.module.scss"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BlogPage = props => {
  const { data, ...rest } = props

  return (
    <Layout {...rest}>
      <SEO title="Blog" />
      <section>
        {data.allWordpressPost.edges.map(post => (
          <article className={style.article}>
            <Link to={post.node.path} className={style.link}>
              <div className={style.articleWrapper}>
                <span className={style.date}>{post.node.date}</span>
                <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.node.excerpt.slice(0, 155).concat("..."),
                  }}
                />
              </div>
            </Link>
            {post.node.categories &&
              post.node.categories.map(category => {
                return (
                  <Link
                    key={category.wordress_id}
                    className={style.category}
                    to={category.path}
                  >
                    {category.name}
                  </Link>
                )
              })}
          </article>
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
