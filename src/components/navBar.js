import React, { useState } from "react"
import clsx from 'clsx';
import { useStaticQuery, graphql, Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const NavBar = () => {

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",

  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  body: {
    margin: 0,
  },
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  }
}))

    const [spacing, setSpacing] = React.useState(2)
    const classes = useStyles()
    const [value, setValue] = React.useState(0)
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
      
    function handleDrawerOpen() {
      setOpen(true);
    }
  
    function handleDrawerClose() {
      setOpen(false);
    }
  
   
  
    const { site, allPosts, allTarotCards } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
          allPosts: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/_posts/posts/" } }
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
                  category
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
    

    return (
<React.Fragment>
<AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar  className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"    
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6">
            {site.siteMetadata.title}
          </Typography>
        </Toolbar>
      </AppBar>
  <Drawer
  className={classes.drawer}
  variant="persistent"
  anchor="left"
  open={open}
  classes={{
    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
  }}
>
  <div className={classes.drawerHeader}>
    <IconButton onClick={handleDrawerClose}>
      {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </IconButton>
  </div>
  <Divider />
  <List>
    {['Today', 'Tarot Card Wiki', 'Choose a Tarot Card', 'Tarot Card Designer'].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
  <Divider />
  <List>
    {['My Tarotly', 'Feedback'].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
</Drawer>
</React.Fragment>
    )}

    export default NavBar;