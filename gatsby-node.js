const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const PostTemplate = path.resolve("./src/templates/post.js")
  const CategoryTemplate = path.resolve("./src/templates/category/index.js")
  const PageTemplate = path.resolve("./src/templates/page.js")

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
        component: PostTemplate,
        context: {
          id: post.node.wordpress_id,
        },
      })
    })

    const BlogCategories = allWordpressCategory.edges
    BlogCategories.forEach(category => {
      createPage({
        path: category.node.path,
        component: CategoryTemplate,
        context: {
          id: category.node.wordpress_id,
        },
      })
    })

    const Pages = allWordpressPage.edges
    Pages.forEach(page => {
      createPage({
        path: page.node.path,
        component: PageTemplate,
        context: {
          id: page.node.wordpress_id,
        },
      })
    })
  })
}
