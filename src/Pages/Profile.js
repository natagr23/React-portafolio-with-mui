import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import profileImg from '../Data/nata_photo.jpg';

import ImgReact from '../Data/react.PNG';
import ImgWordpress from '../Data/wordpress.jpg';
import ImgRstudio from '../Data/RStudio.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'React Js',
    imgPath: ImgReact,
  },
  {
    label: 'WordPress',
    imgPath: ImgWordpress,
  },
  {
    label: 'Rstudio',
    imgPath: ImgRstudio,
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

export default function Profile() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
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
