const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/BlogPostTemplate.js")
  const BlogCategoryTemplate = path.resolve(
    "./src/templates/BlogCategoryTemplate.js"
  )
  const BlogPageTemplate = path.resolve("./src/templates/BlogPageTemplate.js")

  return graphql(`
    {
      allWordpressPost {
        edges {
          node {
            path
            wordpress_id
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            path
            wordpress_id
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            path
            wordpress_id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const {
      allWordpressPost,
      allWordpressCategory,
      allWordpressPage,
    } = result.data

    const BlogPosts = allWordpressPost.edges
    BlogPosts.forEach(post => {
      createPage({
        path: post.node.path,
        component: BlogPostTemplate,
        context: {
          id: post.node.wordpress_id,
        },
      })
    })

    const BlogCategories = allWordpressCategory.edges
    BlogCategories.forEach(category => {
      createPage({
        path: category.node.path,
        component: BlogCategoryTemplate,
        context: {
          id: category.node.wordpress_id,
        },
      })
    })

    const Pages = allWordpressPage.edges
    Pages.forEach(page => {
      createPage({
        path: page.node.path,
        component: BlogPageTemplate,
        context: {
          id: page.node.wordpress_id,
        },
      })
    })
  })
}
