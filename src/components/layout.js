import React from "react"
import Toolbar from '@material-ui/core/Toolbar';
import { rhythm } from "../utils/typography"
import AudioPlayer from "../components/audioPlayer"
import Typography from '@material-ui/core/Typography';
import EmailSignupForm from "./emailSignupForm";
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {orange} from '@material-ui/core/colors';

const theme = {
  palette: {
    type: 'dark',
  },
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
};

export default function Layout({children}) {

 
    return (
       <ThemeProvider theme={theme}>
       <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      > 
      <main>{children}</main> 
        <footer>
        </footer>
      </div>
       </ThemeProvider>
     
    )
  }
