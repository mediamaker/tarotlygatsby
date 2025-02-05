import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Chip from "@material-ui/core/Chip"
import { kebabCase } from "lodash"

const CardReading = () => {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Spirituality" },
  ])

  const _ = require("lodash")

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    paper: {
      height: 140,
      width: 100,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    card: {
      maxWidth: 280,
      textDecoration: "none",
      padding: theme.spacing(0),
    },
    media: {
      height: 360,
      borderRadius: 30,
      margin: 5,
      boxShadow: "1px 3px 3px 2px gainsboro",
    },
    body: {
      margin: 0,
    },

    cardLink: {
      textDecoration: "none",
    },
    Typography: {
      h2: {
        marginTop: 10,
      },
    },
  }))

  const classes = useStyles()

  const { allTarotCards, allFile } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
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
  console.log(allTarotCards.totalCount)
  var randomNumber = Math.floor(Math.random() * allTarotCards.totalCount)
  let selectedCard = allTarotCards.edges[randomNumber].node
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={selectedCard.frontmatter.thumbnail.childImageSharp.fluid.src}
        title={selectedCard.frontmatter.title}
      />

      <CardContent>
        <Typography component="h6" variant="h6" align="center">
          Your quick draw card is {selectedCard.frontmatter.title}
        </Typography>

        {selectedCard.frontmatter.keywords.map((keyword, i) => {
          return (
            <Chip
              color="primary"
              key={i}
              label={keyword}
              className={classes.chip}
            />
          )
        })}

        <Button size="small" color="primary" fullWidth={true}>
          <Link to={`/tarot-cards/${kebabCase(selectedCard.frontmatter.slug)}`}>
            What does {selectedCard.frontmatter.title} signify?
          </Link>
        </Button>
        <Button size="small" color="primary" fullWidth={true}>
          <Link to="/draw-a-tarot-card/">Draw another Card</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
export default CardReading
