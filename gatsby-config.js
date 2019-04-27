module.exports = {
  siteMetadata: {
    title: `Ruby Idrees – Henna & Face paint artist – Hounslow, West London`,
    description: `Ruby is an artist based in London Borough of Hounslow with years of experience of Henna & face painting and canvas painting in variety of mediums i.e. water, oil & acrylic.`,
    author: `@jabranr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        background_color: `#9a679a`,
        theme_color: `#9a679a`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
