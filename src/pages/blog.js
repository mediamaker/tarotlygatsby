import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import Paper from "@material-ui/core/Paper"
import Layout from "../components/layout"
import { Container } from "@material-ui/core"


const Blog = () => {
  const drawerWidth = 240

  const [spacing] = React.useState(2)

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
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
      textDecoration: "none",
    },
    media: {
      height: 210,
    },
    body: {
      margin: 0,
    },
    stickToBottom: {
      width: "100%",
      position: "fixed",
      bottom: 0,
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
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: "0 8px",
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    cardLink: {
      textDecoration: "none",
    },
  }))

  const classes = useStyles()

  const { site, allPosts } = useStaticQuery(
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
            <Paper>
              <div className={classes.drawerHeader} />
             
              <Grid container justify="center" spacing={spacing}>
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={2}>
                    {allPosts.edges.map((post, index) => (
                      <Grid key={index} item>
                        <Card key={index} className={classes.card}>
                          <CardActionArea>
                            <Link
                              to={post.node.frontmatter.slug}
                              className={classes.cardLink}
                            >
                              <CardMedia
                                className={classes.media}
                                image={
                                  post.node.frontmatter.thumbnail
                                    .childImageSharp.fluid.src
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
            </Paper>
          </div>
        </Container>
      </Layout>
    </React.Fragment>
  )
}

export default Blog
