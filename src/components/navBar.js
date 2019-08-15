import React, { useState } from "react"
import clsx from 'clsx';
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import Link from '@material-ui/core/Link';
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
import Hidden from '@material-ui/core/Hidden';
import CssBaseline from '@material-ui/core/CssBaseline';

const NavBar = ({container}) => {

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",

  },
  body: {
    margin: 0,
  },
siteTitle: {
 color: '#fff',
},
appBar: {
  marginLeft: drawerWidth,
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
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
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  hide: {
    display: 'none',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  toolbar: {
    toolbar: theme.mixins.toolbar,
    background: '#8360c3',  /* fallback for old browsers */
    background: '-webkit-linear-gradient( 90.5deg,  rgba(0,128,128,1) 8.5%, rgba(174,206,100,1) 118.2% );',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient( 90.5deg,  rgba(0,128,128,1) 8.5%, rgba(174,206,100,1) 118.2% );' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },

}))

    const classes = useStyles()
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const drawer = (
      <div>
      <div className={classes.toolbar} />
    <Divider />
    <List>
    <ListItem button component={GatsbyLink} to='/' >
          <ListItemIcon> 
            <InboxIcon /> 
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
          <ListItem button component={GatsbyLink} to='/draw-a-tarot-card/' >
          <ListItemIcon> 
            <InboxIcon /> 
          </ListItemIcon>
          <ListItemText primary='Draw a Tarot Card' />
        </ListItem>
        <ListItem button component={GatsbyLink} to='/tarot-cards/' >
          <ListItemIcon> 
            <InboxIcon /> 
          </ListItemIcon>
          <ListItemText primary='Tarot Card Guide' />
        </ListItem>
        <ListItem button component={GatsbyLink} to='/blog/' >
          <ListItemIcon> 
            <InboxIcon /> 
          </ListItemIcon>
          <ListItemText primary='Blog' />
        </ListItem>

    </List>  
    </div>
    );
      
    function handleDrawerToggle() {
      setMobileOpen(!mobileOpen);
    }
  
    const { site} = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `
    )
    

    return (
<div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>

        <Toolbar  className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"    
            onClick={handleDrawerToggle}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6">
          <Link component={GatsbyLink} className={classes.siteTitle} to="/">
          {`Tarotly`}
          </Link>
        </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">

  <Drawer
            container={container}
            variant="temporary"
  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
  open={mobileOpen}
  onClose={handleDrawerToggle}
  classes={{
    paper: classes.drawerPaper,
  }}
  ModalProps={{
    keepMounted: true, // Better open performance on mobile.
  }}
>
 {drawer}
</Drawer>
</Hidden>
<Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>

</nav>

</div>
    )}

    export default NavBar;