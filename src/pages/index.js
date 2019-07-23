import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import RestoreIcon from "@material-ui/icons/Restore"
import FavoriteIcon from "@material-ui/icons/Favorite"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import red from "@material-ui/core/colors/red"

const useStyles = makeStyles(theme => ({
  palette: {
    textColor: red[500],
    primary1Color: red[500],
    primary2Color: red[500],
    accent1Color: red[500],
    pickerHeaderColor: red[500],
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  body: {
    margin: 0,
  },
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
}))

const BlogIndex = () => {
  const { site, allPosts, allTarotCards } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
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

  const [spacing, setSpacing] = React.useState(2)
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <React.Fragment>
      <SEO title={site.siteMetadata.title} />
      <Grid container justify="center" spacing={spacing}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>


            {allPosts.edges.map((post, index) => (
              <Grid key={index} item>
                <Card key={index} className={classes.card}>
                  <CardActionArea>
                    <Link to={post.node.frontmatter.slug}>
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
                          gutterBottom
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
      <BottomNavigation
        className={classes.stickToBottom}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        showLabels
      >
        <BottomNavigationAction label="Wiki" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Today" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Draw Cards" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </React.Fragment>
  )
}

export default BlogIndex
