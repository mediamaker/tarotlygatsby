import React, {useState} from "react";
import {useStaticQuery, graphql, Link} from "gatsby";
import SEO from "../components/seo";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import NavBar from "../components/navBar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 245,
  },
  media: {
    height: 240,
  },
}));




const TarotCardsIndex = () => { 


  const {site, allMarkdownRemark}  = useStaticQuery(
  graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
      allMarkdownRemark(
        filter: { fileAbsolutePath: {regex : "\/_posts/tarot-cards/"} },
        sort: {fields: [frontmatter___date], order: DESC},
      ) {
        totalCount
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              slug
              alternateNames
              number
              description
              meaning
              reversedMeaning
              suit
              element
              arcana
              keywords
              kaballah-letter
              astrology
              numerology-link
              tree-of-life
              chakra
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
    }
  }
  `
  )

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  // const {parse} = require('graphql');
  // const {print} = require('graphql/language/printer');
  // console.log(print(parse('{  allMarkdownRemark (first: 20) { ok koo } }')))
  return (
    <div>
    <SEO title={site.siteMetadata.title} />
    <NavBar/>
    <Grid container justify="center" spacing={spacing}>
        <Grid item xs={6}>
        <Grid container justify="center" spacing={2}>
            {allMarkdownRemark.edges.map((post, index) => (
            
            <Grid key={index} item>

              <Card key={index} className={classes.card}>
              <CardActionArea>
                <Link to={post.node.frontmatter.slug}>
              <CardMedia
          className={classes.media}
          image={post.node.frontmatter.thumbnail.childImageSharp.fluid.src} 
          title={post.node.frontmatter.title}
          />
          <CardContent>
        <Typography color="textPrimary" component="h2" gutterBottom>
        {post.node.frontmatter.title}
        </Typography>
        <Typography variant="body2" component="p">
        {post.node.excerpt}
        </Typography>
      </CardContent>
      </Link>
      </CardActionArea>

    </Card>
    </Grid>
            ))}
        </Grid>
        </Grid>  
        </Grid>
                </div>
  )
}

export default TarotCardsIndex