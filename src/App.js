import React, { useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Profile from './Pages/Profile';
import Work from './Pages/Work';
import Nav from './Pages/Nav';

import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Profile />} /> */}
        <Route path="/Pages/Profile" element={<Profile />} />
        <Route path="/Pages/Work" element={<Work />} />
        {/* <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Item>xs</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>xs=6</Item>
            </Grid>
            <Grid item xs>
              <Item>xs</Item>
            </Grid>
          </Grid>
        </Box> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
