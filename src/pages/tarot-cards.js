import React, { useState } from "react"
import clsx from "clsx"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Container, Paper } from "@material-ui/core"

import Layout from "../components/layout"
const _ = require("lodash")

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: 10,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    width: 150,
  },
  media: {
    height: 250,
  },
  body: {
    margin: 0,
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },

  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  cardLink: {
    textDecoration: "none",
  },
}))

const TarotCardIndex = () => {
  const { site, allTarotCards } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        allTarotCards: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/_posts/tarot-cards/" } }
          sort: { fields: [frontmatter___number], order: ASC }
        ) {
          totalCount
          edges {
            node {
              id
              excerpt
              frontmatter {
                title
                slug
                number
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

  const [spacing] = React.useState(2)
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const pageDescription = `What are tarot cards? Uncover the mysteries of the tarot with accurate descriptions for all 22 tarot cards of the Major Arcana. Learn what each card means when it's drawn, including reversals.`

  return (
    <React.Fragment>
      <SEO title={`Guide to Tarot Cards`} description={pageDescription} />
      <Layout>
        <Container>
          <Paper>
        <div className={classes.root}>
          <CssBaseline />

          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <Typography variant="h5" component="h1">
              What are Tarot Cards?
            </Typography>
            <Typography variant="body" paragraph="true">
              Tarot cards are a centuries old method of divining the future and
              unlocking the secrets held in our subconcious. What is essentially
              a deck of cards, each card with it's own illustration and meaning,
              a pre-determined number of tarot cards are selected by the one
              seeking knowledge ( the "seeker") and laid out in sequence to
              create a kind of a story that describes your situation and may
              uncover some hidden insight into how you might handle things that
              you otherwise might not have considered.
            </Typography>

            <Typography variant="h5" component="h1">
The Major Arcana
            </Typography>
            <Typography component="body" paragraph="true">
            "The Major Arcana" refers to 22 special tarot cards that hold a
              special significance and may represent major life events when
              pulled in a reading. Keep in mind that when a card is pulled in the reverse or
              upside-down orientation, this may indicate a completely different
              meaning than if the card were pulled right-side up. Select a card below and uncover the
              mysteries of the tarot with accurate descriptions for all 22 tarot
              cards of the Major Arcana, including reversals with your tarot card guide.</Typography>
            <Grid container justify="center" spacing={spacing}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                  {allTarotCards.edges.map((post, number) => (
                    <Grid key={number} item>
                      <Card key={number} className={classes.card}>
                        <CardActionArea>
                          <Link
                            to={`/tarot-cards/${_.kebabCase(
                              post.node.frontmatter.slug
                            )}/`}
                            className={classes.cardLink}
                          >
                            <CardMedia
                              className={classes.media}
                              image={
                                post.node.frontmatter.thumbnail.childImageSharp
                                  .fluid.src
                              }
                              title={post.node.frontmatter.title}
                            />
                            <CardContent>
                              <Typography
                                color="textPrimary"
                                component="h2"
                                variant="h5"
                                gutterBottom
                                style={{ fontSize: 16 }}
                              >
                                {post.node.frontmatter.title}
                              </Typography>
                              <Typography variant="body2" component="p">
                                {post.node.excerpt}
                              </Typography>
                            </CardContent>
                          </Link>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </main>
        </div>
        </Paper>
        </Container>
      </Layout>
    </React.Fragment>
  )
}

export default TarotCardIndex
