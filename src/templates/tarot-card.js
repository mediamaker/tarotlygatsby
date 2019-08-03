import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper"
import { makeStyles} from '@material-ui/core/styles';

export const pageQuery = graphql`
  query TarotCardByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        keywords
        number
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

export default function TarotCard({ data }) {


  const useStyles = makeStyles(theme => ({
    root: {
   display: 'flex',
 },
 mainFeaturedPostBody: {
  marginBottom: theme.spacing(4),
  paddingBottom: theme.spacing(2),
},
mainFeaturedPostImage: {
  width: 430,
  marginBottom: theme.spacing(4),
},
 }))

 const classes = useStyles()

  return (

    <div>
    <SEO title={data.markdownRemark.frontmatter.title} description={data.excerpt} image={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid} /> 

      <Layout>

        <Paper>
      <Container>
      <Img className={classes.mainFeaturedPostImage} fluid={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}/>                  
                  {data.markdownRemark.frontmatter.title}
                <p> {data.markdownRemark.frontmatter.description} </p> 
            
          </Container>
        </Paper>
      </Layout>
    </div>
  )
}
