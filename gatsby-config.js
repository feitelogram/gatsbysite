/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-theme-seo', 
      options: {
          title: 'Coding Meetups This Week',
          description: 'Coding Meetups I go to in NYC or want to!',
          author: 'Nicholas Feitel',
          siteUrl: 'https://zen-jennings-88f7da.netlify.com/'
      }
  },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "6itevyfuab79",
        accessToken: "LZZbPaujHM9o8PxmsHXzFyeYcX6HcH56az8tMjjJH7U"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname }/src/`
      }
    }
  ],
  siteMetadata: {
    title: "Coding Meetups This Week",
    author: "Nicholas Feitel"
  }
}
