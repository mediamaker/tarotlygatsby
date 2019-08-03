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
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
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
  }))

  const classes = useStyles()
  const [open, setOpen] = React.useState(false);



    return (
       
      <React.Fragment>
         <CssBaseline />

      <NavBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}/>
             <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >{children}</main> 

        <footer>
        </footer>
        </React.Fragment>
    )
  }

  export default Layout;
