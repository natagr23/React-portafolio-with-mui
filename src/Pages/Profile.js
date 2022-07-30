import * as React from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from '@mui/material';

import { Card, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import profileImg from '../Data/nata_photo.jpg';

export default function Profile() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="90vh"
        sx={{
          background: 'rgb(255, 246, 241)',
        }}
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
          <Grid
            container
            className="grid"
            sx={{
              // flexGrow: 1,
              background: '#001a5b',
            }}
            // columnSpacing={{ md: -1, lg: -1, xl: 1 }}
          >
            <Grid item xs={50}>
              <Grid container justifyContent="center">
                <Link href={'https://github.com/natagr23'}>
                  <GitHubIcon />
                </Link>
                <Link href={'https://www.linkedin.com/in/nataliagarciarosas/'}>
                  <LinkedInIcon />
                </Link>
                <Link
                  href={
                    'mailto:nata_garcia23@hotmail.com?body=My custom mail body'
                  }
                >
                  <EmailIcon />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
