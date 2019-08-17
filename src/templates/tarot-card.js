import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper"
import { makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
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
        meaning
        reversedMeaning
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
      flexGrow: 1,
      padding: theme.spacing(2),
    },
 mainFeaturedPostBody: {
  marginBottom: theme.spacing(4),
  paddingBottom: theme.spacing(2),
  fontSize: 18,
},
mainFeaturedPostImage: {
  maxWidth: 230,
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
    <SEO title={data.markdownRemark.frontmatter.title + " tarot card"} description={data.markdownRemark.frontmatter.description} image={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid} /> 
      <Layout>
      <Container>
        <Paper>
        <div className={classes.root}>

      <div className={classes.drawerHeader} />
      <Typography component='h1' variant='h5' className={clsx(classes.pageTitle)}>
                  {data.markdownRemark.frontmatter.title}</Typography>



                   <Img className={classes.mainFeaturedPostImage} fluid={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}/>                  
 
                   <Typography component='h2' variant='h4' className={clsx(classes.pageTitle)}>
                   {data.markdownRemark.frontmatter.title} Description
                     </Typography>
 <div
          className={classes.mainFeaturedPostBody}
          dangerouslySetInnerHTML={{ __html:  data.markdownRemark.frontmatter.description} }
        />            
      
                   <Typography component='h2' variant='h4' className={clsx(classes.pageTitle)}>
                   What does it mean when {data.markdownRemark.frontmatter.title} is pulled?
                     </Typography>
 <div
          className={classes.mainFeaturedPostBody}
          dangerouslySetInnerHTML={{ __html:  data.markdownRemark.frontmatter.meaning} }
        />     
          <Typography component='h2' variant='h4' className={clsx(classes.pageTitle)}>
                   What does it mean when {data.markdownRemark.frontmatter.title} is pulled reversed?
                     </Typography>
 <div
          className={classes.mainFeaturedPostBody}
          dangerouslySetInnerHTML={{ __html:  data.markdownRemark.frontmatter.reversedMeaning} }
        />        
            </div>
    
        </Paper>
        </Container>
      </Layout>
      </div>
  )
}
