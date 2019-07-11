import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import Layout from "./layout";
import useSiteMetadata from "./useSiteMetadata"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
});


function PageTemplate({ data: { mdx } }) {
  const { title, description, author } = useSiteMetadata();
  const classes = useStyles();

  return (

    <Layout title={title} description= {description} author={author}>
      <Typography variant="h3" gutterBottom>{mdx.frontmatter.title}</Typography>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }

        body
    
    }
  }
`
export default PageTemplate