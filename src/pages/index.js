import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Layout from "../components/layout"
import { Container, Paper } from "@material-ui/core"
import EmailSignupForm from "../components/emailSignupForm";

const BlogIndex = () => {
  const [spacing] = React.useState(8)
console.log(spacing);
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(2),
    },
    h1 : {
      marginBottom: theme.spacing(2),
        },
    h2 : {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(8),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
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
  const [dense] = React.useState(false);

  const { site, heroImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            thumbnail
          }
        }
        heroImage: file(
          relativePath: { eq: "tarot-card-reading-with-crystals.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid
            }
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
                    fluid(maxWidth: 400) {
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
    <div>
      <SEO
        title={site.siteMetadata.title}
        description={site.siteMetadata.description}
        image={site.siteMetadata.thumbnail}
      />
      <Layout>
        <Container>
          <Paper>
          <div className={classes.root}>
            <div className={classes.drawerHeader} />
            <Grid container justify="center" spacing={spacing}>
              <Grid item xs={12} md={9}>
                <Typography variant="h4" component="h1" className= {classes.h1}>
                  Grow your tarot card knowledge and practice
                </Typography>

                <Typography variant="body1" >
                  Our mission at Tarotly is to help our members acheive their
                  self care goals and to do that we need to develop the absolute
                  best tools and services to help you grow your tarot card
                  practice. Level-up your tarot card practice the effective and fun way with Tarotly, an inviting community of like-minded people learning all about how Tarot cards and Oracle cards can connect us to a deeper sense of self and each other.
                  </Typography>
                <Typography variant="body1" >
                  whether you are just getting to know what tarot cards are or
                  you have been practicing tarot readings for a long time.
                </Typography>

                <Typography variant="body1" >
                  We are asking for your help to make Tarotly the best service
                  possible. Join thousands of tarot card enthusiasts and
                  intuitives in building the tarot card platform you don't want
                  to live without.
                  </Typography>

                  <Typography variant="h5" component="h2" className= {classes.h2}>
                  Tarot School starts soon. Enter your email for more info.
                </Typography>
                <EmailSignupForm/>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={9}>
                    <Typography variant="h6" className={classes.title}>
                      
                    </Typography>
                    <div className={classes.demo}>
                
                    </div>
                  </Grid>
                </Grid>          
              </Grid>  
                <div style={{width: '400px'}}> <Img fluid={heroImage.childImageSharp.fluid}></Img></div>
            </Grid>
          </div>
          </Paper>
        </Container>
      </Layout>
    </div>
  )
}

export default BlogIndex