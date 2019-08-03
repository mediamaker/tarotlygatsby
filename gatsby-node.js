// gatsby-node.js

const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const {fmImagesToRelative} = require('gatsby-remark-relative-images')

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
//   fmImagesToRelative(node) // convert image paths for gatsby images

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blog-post.js")
  const tarotCardTemplate = path.resolve("src/templates/tarot-card.js")
  const tagTemplate = path.resolve("src/templates/tags.js")
  return graphql(`
    {
      posts: allMarkdownRemark(limit: 1000, filter: { fileAbsolutePath: {regex : "\/posts/"} }) {
        edges {
          node {
            id  
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tarotCards: allMarkdownRemark(limit: 1000, filter: { fileAbsolutePath: {regex : "\/tarot-cards/"} }) {
        edges {
          node {
            id  
            fields {
              slug
            }
            frontmatter {
              tags
              number
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }
    const posts = result.data.posts.edges
console.log({posts})
    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: blogPostTemplate,
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    const tarotCards = result.data.tarotCards.edges

    tarotCards.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: tarotCardTemplate,
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })
  })
}
