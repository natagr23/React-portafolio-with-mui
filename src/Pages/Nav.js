import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Toolbar,
  Typography,
  AppBar,
  Button,
  useTheme,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useNavigate, Outlet } from 'react-router-dom';

const drawerWidth = 240;
// const navItems = ['Profile', 'Work', 'Contact'];

const Nav = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let navigate = useNavigate();

  // const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const goWork = () => {
    navigate('/Pages/Work'); // <-- issue imperative navigation
  };

  const goProfile = () => {
    navigate('/'); // <-- issue imperative navigation
  };

  const goContact = () => {
    navigate('/Pages/Contact'); // <-- issue imperative navigation
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', background: '#001a5b', color: '#fff' }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Natalia García
      </Typography>
      <Divider />

      <List>
        <ListItemButton
          onClick={goProfile}
          sx={{
            textAlign: 'center',
            ':hover': {
              transition: 'all .4s ease',
              color: '#0A8DE2',
              background: '#001a5b',
            },
            diplay: 'flex',
            gap: '15px',
            paddingLeft: '20%',

            fontSize: '15px',
            textTransform: 'uppercase',
          }}
        >
          PROFILE
        </ListItemButton>
        <ListItemButton
          onClick={goWork}
          sx={{
            textAlign: 'center',
            ':hover': {
              transition: 'all .4s ease',
              color: '#0A8DE2',
              background: '#001a5b',
            },
            diplay: 'flex',
            gap: '15px',
            paddingLeft: '20%',

            fontSize: '15px',
            textTransform: 'uppercase',
          }}
        >
          WORK
        </ListItemButton>
        <ListItemButton
          onClick={goContact}
          sx={{
            textAlign: 'center',
            ':hover': {
              transition: 'all .4s ease',
              color: '#0A8DE2',
              background: '#001a5b',
            },
            diplay: 'flex',
            gap: '15px',
            paddingLeft: '20%',

            fontSize: '15px',
            textTransform: 'uppercase',
          }}
        >
          RESUME
        </ListItemButton>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav" sx={{ background: '#001a5b' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MY PORTAFOLIO
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }} onClick={goProfile}>
              profile
            </Button>
            <Button sx={{ color: '#fff' }} onClick={goWork}>
              work
            </Button>
            <Button sx={{ color: '#fff' }} onClick={goContact}>
              resume
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Toolbar />

      <Outlet />
    </>
  );
};

export default Nav;
