import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import Layout from "./layout";
import useSiteMetadata from "./useSiteMetadata"




function PageTemplate({ data: { mdx } }) {
  const { title, description, author } = useSiteMetadata();

  return (

    <Layout title={title} description= {description} author={author}>

      <div>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </div>
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