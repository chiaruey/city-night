import React from 'react';
import { Grid, Typography, Avatar } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { MovieInfo } from '../MovieSearchResponse';

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

interface MovieInfoCardProps {
    movieInfo: MovieInfo, 
    index: number
}

export const MovieInfoCard: React.FC<MovieInfoCardProps>= (props) => {
    const {movieInfo, index} = props;
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={12} className={classes.movieInfoCard}>
          <Grid container justify="space-between" alignItems="flex-start">
            <Grid item>
              <Typography variant="h5" gutterBottom>
                {movieInfo.title}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar className={classes.icon}>
                <Typography variant="h6">
                  {index + 1}
                </Typography>
              </Avatar>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              {movieInfo.overview}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} className={classes.poster}/>
          </Grid>
        </Grid>
    );
  };
  