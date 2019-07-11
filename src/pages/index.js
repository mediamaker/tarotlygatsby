import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import 'typeface-roboto';

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

  const useStyles = makeStyles({
  root: {
    width: '100%'
  },
});

const BlogIndex = () => {
  const { site, allMdx } = useStaticQuery(
  graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `
  )
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Layout title={site.siteMetadata.title}>
    <SEO title="Mindful living tools, podcasts and more." />
    <Typography variant="h6" gutterBottom>Trending now</Typography>
        {allMdx.edges.map(({ node: post }) => (
          <div key={post.id}>
            <AniLink paintDrip to={post.fields.slug} hex="#6897bb">
              <Typography variant="h5" gutterBottom>{post.frontmatter.title}</Typography>
            </AniLink>
            <p>{post.excerpt}</p>
          </div>
        ))}
      <Bio />
      </Layout>
      </div>  
  )
}

export default BlogIndex