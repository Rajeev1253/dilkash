import * as React from 'react';
import Box from '@mui/material/Box';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return( <div>
    <Stack className="Main">
        <Stack>
        <Box sx={{bgcolor:'#1976D2',  height:'91.2vh', color:'white'}}>
      <List sx={{padding:'0',margin:'0'}}>
        

      <Link to = "/adminDashboard" style={{textDecoration: 'none', color: 'white'}}>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon style={{color:'white'}}>
             
              </ListItemIcon>
              <ListItemText primary = "Dashboard"/>
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to = "/AddBook" style={{textDecoration: 'none', color: 'white'}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon style={{color:'white'}}>
             
              </ListItemIcon>
              <ListItemText primary = "Add Book"/>
            </ListItemButton>
          </ListItem>
          </Link>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon style={{color:'white'}}>
             
              </ListItemIcon>
              <ListItemText primary = "ViewBooks"/>
            </ListItemButton>
          </ListItem>
          
      
      </List>


    </Box>
        </Stack>
    </Stack>
  </div>);
};

export default SideBar;