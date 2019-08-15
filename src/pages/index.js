import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Layout from "../components/layout"
import { Container } from "@material-ui/core"
import EmailSignupForm from "../components/emailSignupForm"

const BlogIndex = () => {

  const [spacing, setSpacing] = React.useState(2)

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

    control: {
      padding: theme.spacing(2),
    },
    card: {

      textDecoration: "none",
    },
    media: {
      height: 210,
    },

    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: "0 8px",
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
   
  
  }))

  const classes = useStyles()

  const { site, allPosts, allTarotCards } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            thumbnail
          }
        }
        allPosts: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/_posts/posts/" } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          totalCount
          edges {
            node {
              id
              excerpt
              frontmatter {
                title
                slug
                date(formatString: "DD MMMM YYYY")
                category
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
        }
        allTarotCards: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/_posts/tarot-cards/" } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          totalCount
          edges {
            node {
              id
              excerpt
              frontmatter {
                title
                slug
                date(formatString: "DD MMMM YYYY")
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
        }
      }
    `
  )

  return (
    <React.Fragment>
      <SEO title={site.siteMetadata.title} description={site.siteMetadata.description} image={site.siteMetadata.thumbnail} />
      <Layout>
        <Container>
          <div className={classes.root}>
              <div className={classes.drawerHeader} />
              <Grid container justify="center" spacing={spacing}>
                  <Grid item xs={12} md={9}>
                  <Typography variant='h6' component='h1'>
                        
                        </Typography>
                        <Typography variant='body' component='h1'>
                         Grow your tarot card practice 
                        </Typography>
                        <Typography variant='body'>

                        Our mission at Tarotly is to help our members acheive their self care goals and to do that we need to develop the absolute best tools and services to help you grow your tarot card practice.
                        </Typography>

                        <Typography variant='body'>
                          We are asking for your help to make Tarotly the best service possible. Join thousands of tarot card enthusiasts and intuitives in building the tarot card platform you don't want to live without.
                        </Typography>
               <EmailSignupForm/>

                </Grid>
              </Grid>
             
          </div>
        </Container>
      </Layout>
    </React.Fragment>
  )
}

export default BlogIndex
