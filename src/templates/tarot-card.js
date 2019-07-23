import React from 'react'
import PropTypes from 'prop-types'
import {
  kebabCase
} from 'lodash'
import Helmet from 'react-helmet'
import {
  graphql,
  Link
} from 'gatsby'
import Layout from '../components/layout'
import Content, {
  HTMLContent
} from '../components/content'
import Img from "gatsby-image"


export const pageQuery = graphql `
  query TarotCardByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        thumbnail {
          childImageSharp {
              fluid(maxWidth: 630) {
                  src
                  srcSet
              }
          }
        }
      }
    }
  }
`

export default function TarotCard({
  data
}) {



  return ( <
    div >
    <
    Layout >

    <
    section className = "section" > {
      helmet || ''
    } <
    div className = "container content" >
    <
    div className = "columns" >
    <
    div className = "column is-10 is-offset-1" >
    <
    Img fluid = {
      thumb
    }
    /> <
    h1 className = "title is-size-2 has-text-weight-bold is-bold-light" > {
      title
    } <
    /h1> <
    p > {
      description
    } < /p>             <
    PostContent content = {
      content
    }
    /> {
      tags && tags.length ? ( <
        div style = {
          {
            marginTop: `4rem`
          }
        } >
        <
        h4 > Tags < /h4> <
        ul className = "taglist" > {
          tags.map(tag => ( <
            li key = {
              tag + `tag`
            } >
            <
            Link to = {
              `/tags/${kebabCase(tag)}/`
            } > {
              tag
            } < /Link> <
            /li>
          ))
        } <
        /ul> <
        /div>
      ) : null
    } <
    /div> <
    /div> <
    /div> <
    /section> <
    /Layout> <
    /div>
  )
}