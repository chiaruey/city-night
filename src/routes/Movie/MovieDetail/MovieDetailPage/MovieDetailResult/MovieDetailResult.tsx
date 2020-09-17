import React from 'react';
import { Grid, Typography, Box, Container, CssBaseline, Avatar } from '@material-ui/core';
import MovieCreationTwoTone from '@material-ui/icons/MovieCreationTwoTone';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { MovieDetailResponse } from '../../../MovieSchema';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    resultSection: {
      maxWidth: '100%',
      minHeight: theme.spacing(60),
      maxHeight: 'fit-content',
      borderRadius: '6px',
      padding: '2% 3% 2% 3%'
    },
    message: {
      margin: "auto",
      width: "fit-content"
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    }
  })
);

const showMovieDetail = (movieDetailResponse: MovieDetailResponse, classes: any) => {
  if (movieDetailResponse != null) {
    return (
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Box className={classes.message}>
            <Typography variant="h5" gutterBottom>
              {movieDetailResponse.title}
            </Typography>
          </Box>
        </Grid>
      </Grid>);
  }
  else
    return '';

}

interface MovieDetailResultProps {
  movieDetailResponse: MovieDetailResponse | undefined;
}

export const MovieDetailResult: React.FC<MovieDetailResultProps> = (props) => {

  const {movieDetailResponse } = props;
  const classes = useStyles();

  const generateResultComponent = (searchResponse: MovieDetailResponse | undefined) => {
    return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <MovieCreationTwoTone />
          </Avatar>
        </div>
        <Grid container className={classes.resultSection}>
          <Grid item xs={12} >
            {searchResponse && showMovieDetail(searchResponse, classes)}
          </Grid>
        </Grid>
      </Container>
    );
  };

  if (movieDetailResponse) {
    return generateResultComponent(movieDetailResponse);
  } else {
    return <></>;
  }
}