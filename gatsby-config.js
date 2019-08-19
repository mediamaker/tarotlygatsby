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
    title: `Tarotly: Grow your Tarot Card practice`,
    author: `John Cozen`,
    description: `Our mission is to help our members achieve their self care and mindful living goals by developing tools to help them succeed.`,
    siteUrl: `https://tarotly.net`,
    thumbnail: `https://tarotly.net/static/33c86f394a3d032ee166a6f4b9ec3e01/f4ab0/woman-with-tarot-cards.jpg`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-playground`,
    "gatsby-plugin-slug",
    {
			resolve: 'gatsby-plugin-snipcart',
			options: {
        apiKey: 'NGQyNjM4NTctNjE3NS00N2I0LTk3Y2YtMjkwNzFhNTc5M2M3NjM3MDE4MDI3ODc5NjExMTc2',
        autopop: "true",
			}
		},
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
        name: `tarot-cards`,
        path: `${__dirname}/_posts/tarot-cards/`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog-post`,
        path: `${__dirname}/_posts/posts/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },  
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Work Sans`,
            variants: [`300`, `400`, `700`, `900`]
          },
        ],
      },
    },
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
    netlifyCmsPaths,
    'gatsby-plugin-netlify',
  ],
}