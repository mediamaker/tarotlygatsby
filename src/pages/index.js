import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Layout from "../components/layout"
import { Container, Paper } from "@material-ui/core"
import EmailSignupForm from "../components/emailSignupForm"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from '@material-ui/core/ListItemText';
import Button from "@material-ui/core/Button"

const BlogIndex = () => {
  const [spacing, setSpacing] = React.useState(2)

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
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
  const [secondary, setSecondary] = React.useState(false);
  const [dense, setDense] = React.useState(false);

  const { site, allPosts, allTarotCards, heroImage } = useStaticQuery(
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
            fluid(maxWidth: 880) {
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
                <Typography variant="h6" component="h1"></Typography>
                <Typography variant="h2" component="h1">
                  Grow your tarot card practice
                </Typography>
                <Typography variant="body1" paragraph="true">
                  Our mission at Tarotly is to help our members acheive their
                  self care goals and to do that we need to develop the absolute
                  best tools and services to help you grow your tarot card
                  practice. Level-up your tarot card practice with Tarotly,
                  whether you are just getting to know what tarot cards are or
                  you have been practicing tarot readings for a long time.
                </Typography>

                <Typography variant="body1" paragraph="true">
                  We are asking for your help to make Tarotly the best service
                  possible. Join thousands of tarot card enthusiasts and
                  intuitives in building the tarot card platform you don't want
                  to live without.
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12} md={9}>
                    <Typography variant="h6" className={classes.title}>
                      
                    </Typography>
                    <div className={classes.demo}>
                      <List dense={dense}>
                        <ListItem>
                          <ListItemText
                            primary="Give or receive tarot card readings anywhere with the tarotly mobile web app"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="Deepen your knowledge of the tarot with detailed card descriptions and meanings (including reversals)"
                            />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="Connect and grow with thousands of Tarot card enthuasts in a private community. People with tarot card experience ranging from beginner to expert level."
                          />  
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                </Grid>
                <Button color="primary" variant="contained" 
    className={`snipcart-add-item ${classes.button}`}
    data-item-id="1"
    data-item-name="subscription_month"
    data-item-price="9.99"
    data-item-payment-interval="Month"
    data-item-url="https://tarotly.net"
    data-item-payment-trial="10"
    data-item-payment-interval-count="1"
    data-item-description="10 day free trial">
        10 day free trial
</Button>

              </Grid>
            </Grid>
            <Img fluid={heroImage.childImageSharp.fluid}></Img>
          </div>
          </Paper>
        </Container>
      </Layout>
    </div>
  )
}

export default BlogIndex