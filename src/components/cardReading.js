
import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';

const CardReading = () => {

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

      card: {
        width: 295,
        textDecoration: 'none',
        padding: theme.spacing(0),

      },
      media: {
        height: 310,
      },
      body: {
        margin: 0,
      },

      cardLink: {
        textDecoration: "none",
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

return(
<Zoom in='true' timeout={{enter:1300  , exit:20000 }}>
<Card className={classes.card}>
    <CardMedia
      className={classes.media}
      image={
        allFile.edges[0].node.childImageSharp.fluid
          .src
      }
      title={allTarotCards.edges[0].node.frontmatter.title}
    />
      <Typography
        color="textPrimary"
        component="h2"
        variant='h5'
        gutterBottom
        align='center'
      >Your Card

      </Typography>
      <Button size="small" color="primary" fullWidth="true">
          Reveal Card
        </Button>

      <CardActions> <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >

          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          One card for quick insight on your situation.
          </Typography>
          <Typography paragraph>
          Go deeper with advanced card spreads.
          </Typography>
          <Button size="small" color="primary" fullWidth="true">
          Three Card Draw
        </Button>
        <Button size="small" color="primary" fullWidth="true">
          Celtic Cross Spread
        </Button>
         

    </CardContent>
    </Collapse>
</Card>
</Zoom>


)
}
export default CardReading
