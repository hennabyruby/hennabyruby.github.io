const _ = require('lodash');
const path = require(`path`);
const axios = require(`axios`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const PostTemplate = path.resolve('./src/templates/post/index.js');
  const CategoryTemplate = path.resolve('./src/templates/category/index.js');
  const TagTemplate = path.resolve('./src/templates/tag/index.js');
  const PageTemplate = path.resolve('./src/templates/page/index.js');

  // ratings
  const graphApiUri = `https://graph.facebook.com/v4.0`;
  const oauthResource = ``;
  const ratingResource = `/1133432090136535/ratings`;
  const queryFields = `rating%2Creviewer%2Creview_text%2Ccreated_time%2Crecommendation_type`;
  const fbAppId = `583301575543235`;
  const fbAppSecret = `foobar`;
  const fbAccessToken = `${fbAppId}|${fbAppSecret}`;
  // const fbAccessToken = `meow`;

  (async () => {
    try {
      const oauth = await axios.get(
        `https://graph.facebook.com/oauth/access_token?client_id=${fbAppId}&client_secret=${fbAppSecret}&grant_type=client_credentials`
      );

      console.log(oauth.data.access_token);

      // const me = await axios.get(
      //   `${graphApiUri}/me?access_token=${oauth.data.access_token}`
      // );

      // console.log(me.data);

      const pages = await axios.get(
        `${graphApiUri}/10217050836915967/accounts?access_token=${oauth.data.access_token}`
      );

      console.log(pages.data);
      const hbrPage = _.pickBy(pages.data, { id: '1133432090136535' });
      console.log(hbrPage);

      const ratings = await axios.get(
        `${graphApiUri}?fields=${queryFields}&access_token=${hbrPage.access_token}`
      );

      console.log(ratings.data);
    } catch (err) {
      if (err.response) console.error(err.response.data);
      else console.log(err);
    }
  })();

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
      allWordpressTag {
        edges {
          node {
            path
            wordpress_id
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const {
      allWordpressPost,
      allWordpressCategory,
      allWordpressTag,
      allWordpressPage
    } = result.data;

    const BlogPosts = allWordpressPost.edges;
    BlogPosts.forEach((post) => {
      createPage({
        path: post.node.path,
        component: PostTemplate,
        context: {
          id: post.node.wordpress_id
        }
      });
    });

    const BlogCategories = allWordpressCategory.edges;
    BlogCategories.forEach((category) => {
      createPage({
        path: category.node.path,
        component: CategoryTemplate,
        context: {
          id: category.node.wordpress_id
        }
      });
    });

    const BlogTags = allWordpressTag.edges;
    BlogTags.forEach((tag) => {
      createPage({
        path: tag.node.path,
        component: TagTemplate,
        context: {
          id: tag.node.wordpress_id
        }
      });
    });

    const Pages = allWordpressPage.edges;
    Pages.forEach((page) => {
      createPage({
        path: page.node.path,
        component: PageTemplate,
        context: {
          id: page.node.wordpress_id
        }
      });
    });
  });
};
