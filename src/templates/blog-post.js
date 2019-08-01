import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton} from "react-share"

const BlogPost = ({ data }) => {
  console.log(data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid)
  
  return (
    <div>
      <SEO title={data.markdownRemark.frontmatter.title} description={data.excerpt} image={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid} /> 

      <Layout>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
          <Img fluid={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}/>
          <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />

{/* TODO: impliment social sharing buttins  */}

{/*         <FacebookShareButton url="" quote={data.excerpt}></FacebookShareButton>
        <TwitterShareButton title={data.markdownRemark.frontmatter.title}></TwitterShareButton> */}
              </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt
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
