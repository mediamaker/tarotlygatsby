import React, {useState} from "react";
import {useStaticQuery, graphql, Link} from "gatsby";
import SEO from "../components/seo";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
import NavBar from "../components/navBar";

const BlogIndex = () => { 
  const useStyles = makeStyles((theme) => ({
    gridList: {
      width: 500,
      height: 450,
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    },
    menuButton: {
      marginLeft: theme.spacing(2),
    },
    root: {
    width: '100%'
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    flexGrow: 1,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));



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
        filter: { fileAbsolutePath: {regex : "\/_posts/posts/"} },
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
              date(formatString: "DD MMMM YYYY")
              category
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
  const classes = useStyles();

  
  // const {parse} = require('graphql');
  // const {print} = require('graphql/language/printer');
  // console.log(print(parse('{  allMarkdownRemark (first: 20) { ok koo } }')))
  return (
    <div>
    <SEO title={site.siteMetadata.title} />
    <NavBar/>
      <Grid container className={classes.root} spacing={2}  >
        <Grid item xs={12}>
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

export default BlogIndex