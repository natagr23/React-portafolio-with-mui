import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import {
  AppBar,
  Tabs,
  Tab,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';

import { Link } from 'react-router-dom';

import { useNavigate, Outlet } from 'react-router-dom';

const Nav = () => {
  const [value, setValue] = useState(false);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  let navigate = useNavigate();

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const goWork = () => {
    navigate('/Pages/Work'); // <-- issue imperative navigation
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar sx={{ background: '#063970' }}>
          <Toolbar>
            <Button variant="contained" component={Link} to={'/Pages/Profile'}>
              <HomeIcon />
            </Button>

            {isMatch ? (
              <>
                <Typography sx={{ fontSize: '1.2 rem', paddingLeft: '10%' }}>
                  MY PORTAFOLIO
                </Typography>
                {/* <DrawerComp /> */}
              </>
            ) : (
              <>
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
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
};

export default Nav;
