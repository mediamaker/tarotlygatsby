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
        pixelId: '1476556719324691',
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
           // 1 query for each data type
          query: `
          {
            site {
              siteMetadata {
                title
                description
              }
            }
            allSitePage {
              edges {
                node {
                  slug: path
                }
              }
            }
            allTarotCards: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/_posts/tarot-cards/" } }
              sort: { fields: [frontmatter___number], order: ASC }
            ) {
              totalCount
              edges {
                node {
                  id
                  excerpt
                  frontmatter {
                    title
                    slug
                    number
                    date(formatString: "DD MMMM YYYY")
                  }
                }
              }
            }
          }`,
          mapping: {
              // Each data type can be mapped to a predefined sitemap
              // Routes can be grouped in one of: posts, tags, authors, pages, or a custom name
              // The default sitemap - if none is passed - will be pages
              allSitePage: {
                  sitemap: `posts`,
              },
              allTarotCards: {
                  sitemap: `tarot-cards`,
              }
          },
          exclude: [
              `/dev-404-page`,
              `/404`,
              `/404.html`,
              `/offline-plugin-app-shell-fallback`,
              `/my-excluded-page`,
              /(\/)?hash-\S*/, // you can also pass valid RegExp to exclude internal tags for example
          ],
          createLinkInHead: true, // optional: create a link in the `<head>` of your site
          addUncaughtPages: true, // optional: will fill up pages that are not caught by queries and mapping and list them under `sitemap-pages.xml`
      }
  },
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
    netlifyCmsPaths,
    'gatsby-plugin-netlify',
  ],
}