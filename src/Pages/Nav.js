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

import profileImg from '../Data/nata_photo.jpg';

import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useNavigate, Outlet } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Profile', 'Work', 'Contact'];

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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Container maxWidth="lg">
        <CssBaseline />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
        >
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
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                  </Button>
                ))}
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
          <Box component="main" sx={{ p: 3 }}>
            <Toolbar />

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image={profileImg}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Natalia Garcia
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I have knowledge in web development (React.js, Javascript,
                  HTML5, CSS, ). During my master's studies I used
                  meteorological data to evaluate a hydrological model using R.
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </Box>
        </Box>
        <Button variant="contained" component={Link} to={'/'}>
          <HomeIcon />
        </Button>
        <>
          <Tabs
            sx={{ marginLeft: 'auto' }}
            textColor="inherit"
            onChange={handleTabChange}
            indicatorColor="secondary"
            value={value}
          >
            <Tab
              label="My Portafolio"
              component={Link}
              to={'/Pages/Profile'}
              value={value}
            />
          </Tabs>

          <Button
            sx={{ marginLeft: '800px' }}
            variant="contained"
            label="SignOut"
            value={value}
            onClick={goWork}
          >
            Profile{' '}
          </Button>
        </>
      </Container>
      <Outlet />
    </>
  );
};

export default Nav;
