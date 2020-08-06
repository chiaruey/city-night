import React from 'react';
// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';
// import { makeStyles } from '@material-ui/core/styles';
import {HeroImageCard} from './HeroImageCard';

export const Home: React.FC = () => {


  // const useStyles = makeStyles((theme) => ({
  //   pct100: {
  //     maxWidth: '100%',
  //     maxHeight: '100%'
  //   }
  // }));

  const starry_night_src = '/static/images/Starry-Night.jpg';
  // const classes = useStyles();

  return (
    <React.Fragment>
      <HeroImageCard title="starry night" artist="Vincent van Gogh" year="1889" src={starry_night_src}/>
      {/* <Box
        display="flex"
        // bgcolor="lightgreen"
        alignItems="center"
        justifyContent="center"
        className={classes.pct100}
      >
        <img src={img_src} className={classes.pct100} />

      </Box> */}
    </React.Fragment>
  );
}