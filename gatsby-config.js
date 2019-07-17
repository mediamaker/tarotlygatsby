require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}

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
    netlifyCmsPaths,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images/uploads`,
        name: 'assets',
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          netlifyCmsPaths,

          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ],
      },
    },    `gatsby-plugin-material-ui`,
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
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        enableIdentityWidget: true,
      },
    },
  ],
}