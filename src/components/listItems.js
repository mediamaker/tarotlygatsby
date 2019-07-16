import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LayersIcon from '@material-ui/icons/Layers';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ArtTrackIcon from '@material-ui/icons/ArtTrack'; 
export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="My Tarotly" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Tarot Card Wiki" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Tarot Tools and Apps" />  
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <QueueMusicIcon />
      </ListItemIcon>
      <ListItemText primary="Podcasts" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ArtTrackIcon />
      </ListItemIcon>
      <ListItemText primary="Articles" />
    </ListItem>
  </div>
);


