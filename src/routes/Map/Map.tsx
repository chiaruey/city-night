import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {MapSearch} from './MapSearch/MapSearch';

const useStyles = makeStyles(() => ({
  paddingMargin0: {
    padding: 0,
    margin: 0
  }
}));

export const Map: React.FC = () => {

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.paddingMargin0}>
        <Box className={classes.paddingMargin0}>
          <MapSearch  />
        </Box>
      </Container>
    </>
  );

};
