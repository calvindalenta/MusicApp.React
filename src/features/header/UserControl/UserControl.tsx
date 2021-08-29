import { Avatar, Button, Menu, MenuItem, Typography } from '@material-ui/core';
import React from 'react';

function UserControl() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div className="user">

        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <Avatar alt="Guest"/>
            <Typography variant="button" display="block">Guest</Typography>
        </Button>

        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My Account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        
    </div>
  );
}

export default UserControl;
