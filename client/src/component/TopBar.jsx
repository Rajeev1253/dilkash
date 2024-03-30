import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const TopBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LMS
            </Typography>

            <IconButton aria-label="delete" size="large" >
              <DeleteIcon fontSize="inherit"  style={{color:'white'}} />
            </IconButton>

          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default TopBar;
