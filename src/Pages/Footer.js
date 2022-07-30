import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        height: '1vh',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        position: 'sticky',

        bottom: 0,
        background: 'rgb(255, 246, 241)',
      }}
    >
      <Typography>@copyright</Typography>
    </Box>
  );
}
