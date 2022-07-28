import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
  Container,
  AppBar,
  ListItemText,
  Tabs,
  Tab,
  Button,
  useTheme,
  useMediaQuery,
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
  const [value, setValue] = useState(false);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  let navigate = useNavigate();

  const theme = useTheme();

  // const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const goWork = () => {
    navigate('/Pages/Work'); // <-- issue imperative navigation
  };

  const goProfile = () => {
    navigate('/'); // <-- issue imperative navigation
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />

      <List>
        {/* {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}

        <ListItemButton sx={{ textAlign: 'center' }}>PROFILE</ListItemButton>
        <ListItemButton sx={{ textAlign: 'center' }}>WORK</ListItemButton>
        <ListItemButton sx={{ textAlign: 'center' }}>CONTACT</ListItemButton>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav">
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
            <Button sx={{ color: '#fff' }}>contact</Button>
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
