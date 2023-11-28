import React from 'react';
import { Grid, Typography, Box, Container, CssBaseline, CardContent, CardMedia, Card } from '@material-ui/core';
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
    },
    media: {
      width: "100%",
      height: "100%"
    }
  })
);

const showMovieDetail = (movieDetailResponse: MovieDetailResponse, classes: any) => {
  if (movieDetailResponse != null) {
    return (
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Box className={classes.message}>
            <Card className={classes.root}>
              <CardMedia
                component="img"
                className={classes.media}
                src={`https://image.tmdb.org/t/p/original/${movieDetailResponse.poster_path}`}
                title={movieDetailResponse.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {movieDetailResponse.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {movieDetailResponse.overview}
                </Typography>
              </CardContent>
            </Card>
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

  const { movieDetailResponse } = props;
  const classes = useStyles();

  const generateResultComponent = (searchResponse: MovieDetailResponse | undefined) => {
    return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
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