require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
// let URL;
// if (process.env.NODE_ENV === 'production') {
//   URL = 'https://gatbsy-ecommerce-demo.netlify.com';
// } else {
//   URL = 'http://localhost:8000';
// }

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: process.env.SNIPCART_API,
        autopop: true,
        js: 'https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.js',
        styles: 'https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.css',
      },
 },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
       spaceId: process.env.CONTENTFUL_ID,
       accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
      
    },
    {
      resolve: `gatsby-plugin-emotion`,
   },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
