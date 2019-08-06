// gatsby-node.js

const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const {fmImagesToRelative} = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (_.get(node, 'internal.type') === `MarkdownRemark`) {
    // Get the parent node
    const parent = getNode(_.get(node, 'parent'))

    // Create a field on this node for the "collection" of the parent
    // NOTE: This is necessary so we can filter `allMarkdownRemark` by
    // `collection` otherwise there is no way to filter for only markdown
    // documents of type `post`.
    createNodeField({
      node,
      name: 'collection',
      value: _.get(parent, 'sourceInstanceName'),
    })
  }
}



exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("./src/templates/blog-post.js")
  const tarotCardTemplate = path.resolve("./src/templates/tarot-card.js")
  const tagTemplate = path.resolve("./src/templates/tags.js")
  const cardSpreadTemplate = path.resolve("./src/templates/card-spreads.js")


  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id  
            fields {
              slug
              collection
            }
            frontmatter {
              tags
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
    result.data.allMarkdownRemark.edges.forEach(edge => {
if (edge.node.fields.collection === 'blog-post'){
      createPage({
        path: edge.node.fields.slug ,
        tags: edge.node.frontmatter.tags,
        component: blogPostTemplate,
        // additional data can be passed via context
        context: {
          id: edge.node.id,
        },
      });


  //    /*  let tags = []
  //     // Iterate through each post, putting all found tags into `tags`
  //     _.each(edge, edge => {
  //       if (_.get(edge, "node.frontmatter.tags")) {
  //         tags = tags.concat(edge.node.frontmatter.tags)
  //       }
  //     })
  //     // Eliminate duplicate tags
  //     tags = _.uniq(tags)
  
  //     // Make tag pages
  //     tags.forEach(tag => {
  //       const tagPath = `/tags/${_.kebabCase(tag)}/`
  
  //       createPage({
  //         path: tagPath,
  //         component: tagTemplate,
  //         context: {
  //           tag,
  //         },
  //       })
  //     })
  // */

    } else if (edge.node.fields.collection === 'tarot-cards') {
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: tarotCardTemplate,
        // additional data can be passed via context
        context: {
          id: edge.node.id,
        },
      });
    } else if (edge.node.fields.collection === 'card-spreads') {
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: cardSpreadTemplate,
        // additional data can be passed via context
        context: {
          id: edge.node.id,
        },
      });
    }
    
    })

  })
}

    // Tag pages:
   

