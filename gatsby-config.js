require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `On a mission to make mindful living easy`,
    author: `John and Lee-Ana`,
    description: `Our mission is to help our members achieve their mindful living goals with tools to succeed across mobile, desktop and voice assistants.`,
    siteUrl: `https://tarotly.net`,
    social: {
      twitter: `tarotly1`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '455395268341831',
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-playground`,
    "gatsby-plugin-slug",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-50891-26`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `posts`,
        path: `${__dirname}/_posts/posts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `tarot-cards`,
        path: `${__dirname}/_posts/tarot-cards/`,
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,    
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tarotly Tarot Cards`,
        short_name: `Tarotly`,
        description: `Mysterious and powerful, learn all about what tarot cards are and how they are used`,
        lang: `en`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,  
        icon: `src/images/icon.png`, // This path is relative to the root of the site.

      },
    },
    //make sure to load gatsby-plugin-offline after gatsby-plugin-manifest
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}