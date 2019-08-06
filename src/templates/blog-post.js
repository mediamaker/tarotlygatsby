import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import { makeStyles} from '@material-ui/core/styles';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Paper from "@material-ui/core/Paper"
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
        <Container className={classes.mainFeaturedPost}>
        <Paper>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
          <Img className={classes.mainFeaturedPostImage} fluid={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}/>
          <div
          className={classes.mainFeaturedPostBody}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
              </Paper>
              </Container>

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
