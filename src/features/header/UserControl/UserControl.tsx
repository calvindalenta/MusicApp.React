import { Avatar, Button, createTheme, makeStyles, Menu, MenuItem, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';

function UserControl() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const useStyles = makeStyles((theme) => ({
    header: {
      height: "10vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      //backgroundColor: "red",
      // verticalAlign: "middle",
      // margin: "auto",
      // textAlign: "center",
    },
    text: {
      textTransform: "capitalize",
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  }));

  const classes = useStyles();

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  // theme.typography.h6 = {
  //   fontSize: '0.6rem',
  //   '@media (min-width:600px)': {
  //     fontSize: '0.8rem',
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     fontSize:  '1rem',
  //   },
  // };
  
  return (
    <div className={classes.header}>

        <Button aria-controls="user-menu" aria-haspopup="true" onClick={handleClick}>
            <Avatar alt="Guest" className={classes.small}/>
            <ThemeProvider theme={theme}>
              <Typography variant="body1" className={classes.text}>Guest</Typography> 
            </ThemeProvider>
        </Button>

        <Menu
        id="user-menu"
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
