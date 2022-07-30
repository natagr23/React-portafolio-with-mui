import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ImgAgroapp from '../Data/Agro_App.JPG';
import ImgPortafolio from '../Data/portafolio.PNG';
import Imgqr from '../Data/qrproducts.PNG';
import Imgsearch from '../Data/searchsongs.PNG';
import { Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Agro App',
    imgPath: ImgAgroapp,
    link: 'https://github.com/natagr23/Agro_App',
  },
  {
    label: 'QR Porducts',
    imgPath: Imgqr,
    link: 'https://github.com/natagr23/QR-Products',
  },
  {
    label: 'Search songs',
    imgPath: Imgsearch,
    link: 'https://github.com/natagr23/QR-Products',
  },
  {
    label: 'Portafolio',
    imgPath: ImgPortafolio,
    link: 'https://github.com/natagr23/React-portafolio-with-mui',
  },
];

export default function Profile() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="70vh"
        sx={{
          background: 'rgb(255, 246, 241)',
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh"
          // borderRadius="50%"
        >
          <Typography>{images[activeStep].label}</Typography>

          <Link href={images[activeStep].link}>
            <GitHubIcon />
          </Link>
          <Link href={images[activeStep].link}>
            <ScreenSearchDesktopIcon />
          </Link>
        </Box>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    // height: 355,
                    display: 'block',
                    // maxWidth: 600,
                    overflow: 'hidden',
                    width: '80%',
                    borderRadius: '3%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </>
  );
}
