import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper"
import { makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography"
import clsx from 'clsx';

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
  fontSize: 18,

},
mainFeaturedPostImage: {
  maxWidth: 330,
  marginBottom: theme.spacing(4),
},

drawerHeader: {
  display: 'flex',
  alignItems: 'center',
  padding: '0 8px',
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
},

 }))

 const classes = useStyles()

  return (

    <div>
    <SEO title={data.markdownRemark.frontmatter.title} description={data.excerpt} image={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid} /> 

      <Layout>

        <Paper>
      <Container>
      <div className={classes.drawerHeader} />

      <Typography component='h3' variant='h3' className={clsx(classes.pageTitle)}>
                  {data.markdownRemark.frontmatter.title}</Typography>
                   <Img className={classes.mainFeaturedPostImage} fluid={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}/>                  

 <div
          className={classes.mainFeaturedPostBody}
          dangerouslySetInnerHTML={{ __html:  data.markdownRemark.frontmatter.description} }
        />            
          </Container>
        </Paper>
      </Layout>
    </div>
  )
}
