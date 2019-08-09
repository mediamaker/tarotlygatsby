import React, { useState } from "react"
import clsx from 'clsx';
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from "../components/layout";
const _ = require('lodash')

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",

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
    height: 190,
  },
  body: {
    margin: 0,
  },

  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },

  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  cardLink: {
    textDecoration: "none",
  }

}))

const BlogIndex = () => {

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

  const [open, setOpen] = React.useState(false);
  
  return (
    <React.Fragment>
      <SEO title={site.siteMetadata.title} />
      <Layout>
      <div className={classes.root}>
      <CssBaseline />
    
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography component='h4' variant='h4'>
          Tarot Cards
        </Typography>
        <Grid container justify="center" spacing={spacing}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {allTarotCards.edges.map((post, number) => (
              <Grid key={number} item>
                <Card key={number} className={classes.card}>
                  <CardActionArea>
                    <Link to={`/tarot-cards/${_.kebabCase(post.node.frontmatter.slug)}/`} className={classes.cardLink}>
                      <CardMedia
                        className={classes.media}
                        image={
                          post.node.frontmatter.thumbnail.childImageSharp.fluid
                            .src
                        }
                        title={post.node.frontmatter.title}
                      />
                      <CardContent>
                        <Typography
                          color="textPrimary"
                          component="h2"
                          variant="h5"
                          gutterBottom
                          style={{fontSize: 16}}
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
    </Layout>

    
    </React.Fragment>
  )
}

export default BlogIndex
