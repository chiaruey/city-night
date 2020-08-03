import React from 'react';
// import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

export const Home: React.FC = () => {


  const useStyles = makeStyles((theme) => ({
    pct100: {
      maxWidth: '100%',
      maxHeight: '100%'
    }
  }));

  const img_src = '/static/images/Starry-Night.jpg';
  const classes = useStyles();

  return (
    // <Container maxWidth="sm">

    //   <Box color="text.primary">
    //     <img src={img_src} className={classes.heroImage} />
    //   </Box>
    // </Container>
    <React.Fragment>
      <Box
        display="flex"
        // bgcolor="lightgreen"
        alignItems="center"
        justifyContent="center"
        className={classes.pct100}
      >
        <img src={img_src} className={classes.pct100} />

      </Box>
    </React.Fragment>
  );
}