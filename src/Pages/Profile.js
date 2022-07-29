import * as React from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import profileImg from '../Data/nata_photo.jpg';

export default function Profile() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="90vh"
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="profile"
            height="300"
            image={profileImg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Natalia Garcia
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I have knowledge in web development (React.js, Javascript, HTML5,
              CSS, ). During my master's studies I used meteorological data to
              evaluate a hydrological model using R.
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
