import React from "react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import Link from '@material-ui/core/Link';
import Typography from "@material-ui/core/Typography"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppsIcon from '@material-ui/icons/Apps';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import CssBaseline from '@material-ui/core/CssBaseline';
import StorefrontIcon from '@material-ui/icons/Storefront';

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
    background: `#fff`, /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  },

}))

    const classes = useStyles()
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const drawer = (
      <nav className={classes.toolbar} >
    <Divider />
    <List>
    <ListItem button component={GatsbyLink} to='/' >
          <ListItemIcon> 
            <HomeIcon /> 
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
          <ListItem button component={GatsbyLink} to='/draw-a-tarot-card/' >
          <ListItemIcon> 
            <PhotoAlbumIcon /> 
          </ListItemIcon>
          <ListItemText primary='Draw a Tarot Card' />
        </ListItem>
        <ListItem button component={GatsbyLink} to='/tarot-cards/' >
          <ListItemIcon> 
            <AppsIcon /> 
          </ListItemIcon>
          <ListItemText primary='Tarot Cards Guide' />
        </ListItem>
        <ListItem button component={GatsbyLink} to='/blog/' >
          <ListItemIcon> 
            <QuestionAnswerIcon /> 
          </ListItemIcon>
          <ListItemText primary='Blog' />
        </ListItem>
        <ListItem button component="a" href="https://shop.mediamakeru.com/collections/tarotly-apparel-everything-for-the-mystics">
          <ListItemIcon> 
            <StorefrontIcon /> 
          </ListItemIcon>
          <ListItemText primary='Apparel' />
        </ListItem>
        <Divider />
    
      
    </List>  
    </nav>
    );
      
    function handleDrawerToggle() {
      setMobileOpen(!mobileOpen);
    }
  


    return (
<div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>

        <Toolbar  className={classes.toolbar}>
          <IconButton
            color="000"
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
      <div className={classes.drawer} aria-label="mailbox folders">
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

</div>

</div>
    )}

    export default NavBar;