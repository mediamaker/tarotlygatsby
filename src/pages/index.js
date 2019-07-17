import React, {useState} from "react"
import {useStaticQuery, graphql} from "gatsby"
import SEO from "../components/seo"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Img from 'gatsby-image'


  const useStyles = makeStyles((theme) => ({
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



const BlogIndex = () => {
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
  const [image , setImage] = useState('/images/vladislav-muslakov-cwiu33kgtoc-unsplash.jpg')
  return (
    <div>
    <SEO title={site.siteMetadata.title} />
    <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
          Tarotly
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.root} spacing={2}  >
        <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
            {allMarkdownRemark.edges.map((post, index) => (
              
            <Grid key={index} item>

              <Card key={index} className={classes.card}>
              <CardMedia
          className={classes.media}
          image={post.node.frontmatter.thumbnail.childImageSharp.fluid.src} 

          title={post.node.frontmatter.title}
          />
          <CardContent>
        <Typography color="textPrimary" component="h2" gutterBottom>
        {post.node.frontmatter.title}
        </Typography>
        <Typography variant="body1" component="p">
        {post.node.excerpt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
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