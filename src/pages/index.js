import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

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

  return (
    <Layout title={site.siteMetadata.title}>
    <SEO title="Mindful living tools, podcasts and more." />
    <Bio />
    <h3>Trending now</h3>
      <ul>
        {allMdx.edges.map(({ node: post }) => (
          <li key={post.id}>
            <AniLink to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </AniLink>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
      </Layout>
  )
}

export default BlogIndex