import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from '@mui/material';

// const icons = [
//   {
//     label: 'LinkedIn',
//     imgPath: LinkedInIcon,
//     link: 'https://github.com/natagr23/Agro_App',
//   },
//   {
//     label: 'Github',
//     imgPath: GitHubIcon,
//     link: 'https://github.com/natagr23/QR-Products',
//   },
//   {
//     label: 'Email',
//     imgPath: EmailIcon,
//     link: 'https://github.com/natagr23/QR-Products',
//   },
// ];

export default function Contact() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <Grid sx={{ flexGrow: 1 }}>
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
      </Box>
    </>
  );
}
