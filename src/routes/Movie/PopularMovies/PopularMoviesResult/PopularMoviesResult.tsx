import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { MovieSearchResponse, MovieInfo } from '../../MovieSchema';
import { MovieInfoCard } from '../../MovieInfoCard';
import { MoviePagination } from '../../MoviePagination';
import { PopularMoviesPayload } from '../PopularMoviesPayload';

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
    },
    message: {
      margin: "auto",
      width: "fit-content"
    },
    pagination: {
      margin: "5%"
    }
  })
);

const showPagination = (searchResponse: MovieSearchResponse, classes: any, page: number, handleChangePage: any, movieCount: number) => {
  return (
    <Grid item xs={12}>
      <Box className={classes.pagination}>
        <MoviePagination recordCount={movieCount} selectedPage={page} onChange={handleChangePage} />
      </Box>
    </Grid>);
}

const listOfMovies = (searchResponse: MovieSearchResponse, classes: any) => {
  const res: any[] = [];
  if (searchResponse.results) {
    const page = searchResponse.page;
    searchResponse.results.forEach((movieInfo: MovieInfo, index) => {
      console.log('list of movies index -> ' + index + ', title = ' + movieInfo.title);
      res.push(
        <MovieInfoCard movieInfo={movieInfo} index={index + (page - 1) * 20} />
      )

    });

  }
  return res;

}

interface PopularMoviesResultProps {
  popularMoviesResponse: MovieSearchResponse | undefined;
  popularMovies: any;
  result: any;
  isInProgress: any;
}

export const PopularMoviesResult: React.FC<PopularMoviesResultProps> = (props) => {
  const { popularMoviesResponse, popularMovies } = props;

  const [page, setPage] = useState(1);

  const handleChangePage = (event: unknown, newPage: number) => {
    if (page !== newPage) {
      setPage(newPage);
      const payload: PopularMoviesPayload = {
        page: newPage
      };
      popularMovies(payload)
    }
  };

  useEffect(() => {
    setPage(1);
  }, [popularMoviesResponse?.total_results]);

  const classes = useStyles();
  let movieCount = 0;
  const generateResultComponent = (searchResponse: MovieSearchResponse | undefined) => {
    let resultMessage = "No movie found!";

    if (searchResponse) {
      movieCount = searchResponse.total_results;
      const totalPage = Math.ceil(movieCount / 20);
      resultMessage = movieCount + " popular movie" + ((movieCount > 1) ? "s" : "") +
        " found ( page " + page + " of " + totalPage + " )";
    }

    return (
      <Grid container className={classes.resultSection}>
        <Grid item xs={12} >
          <Grid container>
            <Grid item xs={12} sm={12}>
              <Box className={classes.message}>
                <Typography variant="h5" gutterBottom>
                  {resultMessage}
                </Typography>
              </Box>
            </Grid>
            {searchResponse && showPagination(searchResponse, classes, page, handleChangePage, movieCount)}
            {searchResponse && listOfMovies(searchResponse, classes)}
            {searchResponse && showPagination(searchResponse, classes, page, handleChangePage, movieCount)}
          </Grid>
        </Grid>
      </Grid>
    );
  };

  if (popularMoviesResponse) {
    return generateResultComponent(popularMoviesResponse); 
  } else {
    return <></>;
  }
}