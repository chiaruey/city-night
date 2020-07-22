import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { MovieSearchResponse, MovieInfo } from '../MovieSearchResponse';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieInfoCard: {
      backgroundColor: "#fffff"
    },
  })
);

const listOfMovies = (searchResponse: MovieSearchResponse) => {
  const res: any[] = [];
  if (searchResponse.results) {
    searchResponse.results.forEach((movieInfo: MovieInfo, index) => {
      console.log('list of movies index -> ' + index + ', title = ' + movieInfo.title);
      res.push(
        <Grid item xs={12} sm={12}>
          <Box className="movieInfoCard">
            <Typography variant="h6" gutterBottom>
            {movieInfo.title}
            </Typography>
          </Box>


        </Grid>
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

  const generateResultComponent = (searchResponse: MovieSearchResponse | undefined) => {
    let resultMessage = "No movie found!";

    if (searchResponse) {
      resultMessage = searchResponse.total_results + " movies has been found";
    }

    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={8} >
          <Grid container>
            <Grid item xs={12} sm={12}>
              <Box >
                <Typography variant="h5" gutterBottom>
                  {resultMessage}
                </Typography>
              </Box>
            </Grid>
            {searchResponse && listOfMovies(searchResponse)}

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