import React from "react"
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

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
    colorPrimary: {
      color: '#fff',
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
  palette: {
    primary: orange,
  },
}));

export default function Nav() {

    const classes = useStyles();
    return (
        <div>
<AppBar position="static">
<Toolbar>
  <Typography variant="h5" className={classes.title}>
  <Link to="/"> Tarotly <span role="img" aria-label="flower-playing-card">🎴</span></Link>
  </Typography>
  {/* <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="Menu">
    <MenuIcon />
  </IconButton> */}
</Toolbar>
</AppBar>
</div>
)
    }



