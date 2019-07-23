import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"


const BlogPost = ({ data }) => {
  console.log(data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid)
  
  return (
    <div>
      <Layout>
          <Img fluid={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}/>
          <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
              </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 630) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default BlogPost
