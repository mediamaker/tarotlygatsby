import React, { useState } from "react"
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../components/navBar';
const drawerWidth = 240;

const Layout = ({children}) => {

  const useStyles = makeStyles(theme => ({
     root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  
  },
   toolbar: theme.mixins.toolbar,
   appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  }))

  const classes = useStyles()
  const [open, setOpen] = React.useState(false);



    return (
       
      <div className={classes.root}>
      <CssBaseline />

      <NavBar position="fixed" className={classes.appBar}/>
             <main
        className={classes.content}
        
      >

      {children}</main> 

        <footer>
        </footer>
        </div>
    )
  }

  export default Layout;
