import React, { useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Profile from './Pages/Profile';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import Nav from './Pages/Nav';
import Footer from './Pages/Footer';

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
        <Route path="/" element={<Profile />} />
        <Route path="/Pages/Work" element={<Work />} />
        <Route path="/Pages/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
