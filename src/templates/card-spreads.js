import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Container } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import clsx from "clsx"

export const pageQuery = graphql`
  query cardSpreadByID($id: String!) {
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

export default function CardSpread({ data }) {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
    },
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    mainFeaturedPostBody: {
      marginBottom: theme.spacing(4),
      paddingBottom: theme.spacing(2),
    },
    mainFeaturedPostImage: {
      marginBottom: theme.spacing(4),
      maxWidth: 430,
      maxHeight: "100%",
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
  return (
    <div>
      <SEO
        title={data.markdownRemark.frontmatter.title}
        description={data.excerpt}
        image={data.markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}
      />
      <Layout>
        <Container>
          <div className={classes.drawerHeader} />
          <Typography
            component="h3"
            variant="h3"
            className={clsx(classes.pageTitle)}
          >
            {data.markdownRemark.frontmatter.title}
          </Typography>

          <Grid
            container spacing={3}
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid xs={12} sm={6} style={{ width: "100%" }}>
              <Paper className={classes.paper}>
                <Img
                  className={classes.mainFeaturedPostImage}
                  fluid={
                    data.markdownRemark.frontmatter.thumbnail.childImageSharp
                      .fluid
                  }
                />
              </Paper>
            </Grid>
            <Grid itemxs={12} sm={6} >
              <Paper className={classes.paper}>
                <div
                  className={classes.mainFeaturedPostBody}
                  dangerouslySetInnerHTML={{
                    __html: data.markdownRemark.frontmatter.description,
                  }}
                ></div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </div>
  )
}
