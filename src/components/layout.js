import React, { useState } from "react"
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../components/navBar';
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Helmet from 'react-helmet';

const drawerWidth = 240;

const Layout = ({children}) => {

  const useStyles = makeStyles(theme => ({
     root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
  
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

      {children}
      <Grid container justify="center" spacing={4}>
      <Grid item xs={6}>
      <Typography component='p' style={{color:`#A8A8A8`, marginTop: 10, fontSize:12}}>
        Our mission is to help our members achieve their self care goals by building powerful tools.
        </Typography>
      </Grid>
      </Grid>
      </main> 

        <footer>
        </footer>
        </div>
    )
  }

  export default Layout;
