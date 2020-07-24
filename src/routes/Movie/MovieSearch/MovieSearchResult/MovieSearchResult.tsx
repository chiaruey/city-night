import React from 'react';
import { Grid, Typography, Box, Avatar } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { MovieSearchResponse, MovieInfo } from '../MovieSearchResponse';
import { MovieInfoCard } from '../MovieInfoCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieInfoCard: {
      backgroundColor: "#fffff",
      border: "solid 1px #002984",
      padding: "3%"
    },
    resultSection: {
      maxWidth: '100%',
      minHeight: theme.spacing(60),
      maxHeight: 'fit-content',
      borderRadius: '6px',
      padding: '2% 3% 2% 3%'
    },
    icon: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      backgroundColor: '#01579B'
    },
    poster: {
      width: "100%",
      height: "100%"
    }
  })
);

const listOfMovies = (searchResponse: MovieSearchResponse, classes: any) => {
  const res: any[] = [];
  if (searchResponse.results) {
    searchResponse.results.forEach((movieInfo: MovieInfo, index) => {
      console.log('list of movies index -> ' + index + ', title = ' + movieInfo.title);
      res.push(
        <MovieInfoCard movieInfo={movieInfo} index={index+1} />
      )

    });

  }
  return res;

}

interface MovieSearchResultProps {
  movieSearchResponse: MovieSearchResponse | undefined;
}

export const MovieSearchResult: React.FC<MovieSearchResultProps> = (props) => {
  const { movieSearchResponse } = props;


  const classes = useStyles();
  const generateResultComponent = (searchResponse: MovieSearchResponse | undefined) => {
    let resultMessage = "No movie found!";

    if (searchResponse) {
      resultMessage = searchResponse.total_results + " movies has been found, but only 20 movies can be displayed at once";
    }

    return (
      <Grid container className={classes.resultSection}>
        <Grid item xs={12} >
          <Grid container>
            <Grid item xs={12} sm={12}>
              <Box >
                <Typography variant="h5" gutterBottom>
                  {resultMessage}
                </Typography>                
              </Box>
            </Grid>
            {searchResponse && listOfMovies(searchResponse, classes)}
          </Grid>
        </Grid>
      </Grid>
    );
  };

  if (movieSearchResponse) {
    return generateResultComponent(movieSearchResponse); return generateResultComponent(movieSearchResponse);
  } else {
    return <></>;
  }
}