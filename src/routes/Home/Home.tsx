import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { HeroImageCard } from './HeroImageCard';
import { colors } from '../../theme/variables';

export const Home: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    intro: {
      color: colors.deepSeaBlue
    },
    pct100: {
      maxWidth: '100%',
      maxHeight: '100%'
    }
  }));

  const starry_night_src = '/static/images/Starry-Night.jpg';
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.intro}>
        <Typography variant="h6" gutterBottom>
          If you like to read about movies without advertisement....
      </Typography>
      </Box>

      <Container className={classes.pct100}>
        <HeroImageCard title="starry night" artist="Vincent van Gogh" year="1889" src={starry_night_src} />
      </Container>
    </React.Fragment>
  );
}