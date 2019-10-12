require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Nathan's background`,
    description: `A Description of Nathan's Band`,
    author: `Anon`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `j38gynxqhxw9`,
        accessToken: `f03565629c7630b1ab7bf862fb7fe3f109d01ad889884de3ef79f1220cdbd42b`
      }
    }
  ]
};
