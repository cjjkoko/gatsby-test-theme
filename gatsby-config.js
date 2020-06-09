module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-theme-checkout`, options: {}
    },
    {
      resolve: `gatsby-theme-marketing`, options: {
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1q72o6qjws1u`,
        accessToken: `SP8OX5ivftubPDEzrXHUUQtaelbsfFNyI86mr6XArC0`
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
  ]
}
