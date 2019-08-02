import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import { makeStyles} from '@material-ui/core/styles';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Paper from "@material-ui/core/Paper"
import {FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton} from "react-share"
import { Container } from "@material-ui/core";

const BlogPost = ({ data }) => {

  const useStyles = makeStyles(theme => ({
    root: {
   display: 'flex',
 },
 mainFeaturedPostBody: {
  marginBottom: theme.spacing(4),
  paddingBottom: theme.spacing(2),
},
mainFeaturedPostImage: {
  marginBottom: theme.spacing(4),
},
 }))

 const classes = useStyles()


  return (
    <div>
      <SEO title={data.markdownRemark.frontmatter.title} description={data.excerpt} image={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid} /> 

      <Layout>
      <Paper>
        <Container className={classes.mainFeaturedPost}>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
          <Img className={classes.mainFeaturedPostImage} fluid={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}/>
          <div
          className={classes.mainFeaturedPostBody}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />

{/* TODO: impliment social sharing buttons  */}

{/*         <FacebookShareButton url="" quote={data.excerpt}></FacebookShareButton>
        <TwitterShareButton title={data.markdownRemark.frontmatter.title}></TwitterShareButton> */}
              </Container>
              </Paper>
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
