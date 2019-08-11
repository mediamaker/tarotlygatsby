import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import {kebabCase} from "lodash";

const CardReading = () => {
  
  const [chipData, setChipData] = React.useState([    { key: 0, label: 'Spirituality' },
]);
  
  const _ = require('lodash')
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
 

    const useStyles = makeStyles(theme => ({
      root: {
          flexGrow: 1,
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      paper: {
        height: 140,
        width: 100,
      },
      chip: {
        margin: theme.spacing(0.5),
      },
      card: {
        width: 345,
        textDecoration: 'none',
        padding: theme.spacing(0),

      },
      media: {
        height: 370,
        borderRadius: 30,
        margin: 5,
        boxShadow: '1px 3px 3px 2px gainsboro',

      },
      body: {
        margin: 0,
      },

      cardLink: {
        textDecoration: "none",
      },
      Typography:{
      h2: {
        marginTop:10,
      }
    }
  }))
    
    const classes = useStyles()
    const [checked, setChecked] = React.useState(true);

    const { site, allPosts, allTarotCards, allFile } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
              }
            }
            allFile(filter: {name: {eq: "card-back"}}) {
              edges {
                  node {
                    childImageSharp {
                      fluid(maxWidth: 630) {
                        ...GatsbyImageSharpFluid
                       }
                    }
                  }
                }
              }
            allTarotCards: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/_posts/tarot-cards/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  excerpt
                  frontmatter {
                    title
                    keywords
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
      var randomNumber = Math.floor(Math.random() * 3) ;
let selectedCard = allTarotCards.edges[randomNumber].node
return(
<Card className={classes.card}>
    <CardMedia
      className={classes.media}
      image={
        selectedCard.frontmatter.thumbnail.childImageSharp.fluid
          .src
      }
      title={selectedCard.frontmatter.title}
    />

      <CardContent>
      <Typography component='h6' variant='h6' align='center'>
           Your quick draw card is {selectedCard.frontmatter.title}
          </Typography>
          
      {selectedCard.frontmatter.keywords.map((keyword, i) => {
        return(
          <Chip color="primary"
          key={i}
          label={keyword}
          className={classes.chip}
        />
        )
      })}

      <Button size="small" color="primary" fullWidth={true}>
      <Link to={`/tarot-cards/${kebabCase(selectedCard.frontmatter.slug)}`}>What does {selectedCard.frontmatter.title} signify?</Link>
        </Button>
        <Button size="small" color="primary" fullWidth={true}>
      <Link to="/">Draw another Card</Link>
        </Button>

    </CardContent>
</Card>
)
}
export default CardReading
