import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import 'typeface-roboto';

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
  const { site } = useStaticQuery(
  graphql`
  query {
    site {
      siteMetadata {
        title
        description
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
      </Layout>
      </div>  
  )
}

export default BlogIndex