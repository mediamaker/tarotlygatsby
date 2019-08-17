import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import { makeStyles} from '@material-ui/core/styles';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Paper from "@material-ui/core/Paper"
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography"
import clsx from 'clsx';
import Grid from "@material-ui/core/Grid"

const BlogPost = ({ data }) => {

  const useStyles = makeStyles(theme => ({
    root: {
   display: 'flex',
 },
 mainFeaturedPostBody: {
  marginBottom: theme.spacing(4),
  marginLeft: theme.spacing(2), 
  paddingBottom: theme.spacing(2),
  fontSize: 18,
},
mainFeaturedPostImage: {
  marginBottom: theme.spacing(4),
  maxWidth: 550,
  alignItems: 'center'
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
 const [spacing, setSpacing] = React.useState(2)

  return (
    <div>
      <SEO title={data.markdownRemark.frontmatter.title} description={data.excerpt} image={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid} /> 

      <Layout>
      <Container>

        <Paper className={classes.paper}>
                  <div className={classes.drawerHeader} />
                              <Grid container justify="center" spacing={spacing}>
              <Grid item xs={12} md={9}>

                  <Typography component='h1' variant='h4' className={clsx(classes.pageTitle)}>
        {data.markdownRemark.frontmatter.title}
        </Typography>
          <Img className={classes.mainFeaturedPostImage} fluid={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}/>
          <div
          className={classes.mainFeaturedPostBody}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
                      </Grid>
            </Grid>
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
