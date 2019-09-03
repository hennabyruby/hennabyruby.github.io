module.exports = {
  siteMetadata: {
    title: `Henna & Face paint by Ruby | Hounslow, West London`,
    description: `Ruby is an artist based in London Borough of Hounslow with years of experience of Henna & face painting and canvas painting in variety of mediums i.e. water, oil & acrylic.`,
    siteUrl: process.env.GATSBY_APP_HOSTNAME,
    author: `@jabranr`,
    social: {
      facebook: `https://www.facebook.com/hennabyruby`,
      instagram: `https://www.instagram.com/hennabyrubylondon`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#e91e63`,
        theme_color: `#e91e63`,
        display: `minimal-ui`,
        icon: `src/images/henna-by-ruby-logo-square.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'hennabyruby.dyzynz.net',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: false,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: 'https://hennabyruby.dyzynz.net',
          replacementUrl: process.env.GATSBY_APP_HOSTNAME,
        },
        concurrentRequests: 10,
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/pages',
          '**/media',
          '**/tags',
          '**/taxonomies',
          '**/services',
        ],
        excludedRoutes: [],
        normalizer: function({ entities }) {
          return entities;
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `henna-by-ruby`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
