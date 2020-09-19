import React from 'react';
import { Button, Grid, Typography, Avatar, CardHeader, CardContent, CardMedia, Card, CardActions, CardActionArea } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { MovieInfo } from '../MovieSchema';
import clsx from 'clsx';


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
    bigIcon: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      backgroundColor: '#01579B'
    },
    icon: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      backgroundColor: '#01579B'
    },
    root: {
      maxWidth: "100%",
    },
    media: {
      width: "100%",
      height: "100%"
    }
  })
);

interface MovieInfoCardProps {
  movieInfo: MovieInfo,
  index: number
}

export const MovieInfoCard: React.FC<MovieInfoCardProps> = (props) => {
  const { movieInfo, index } = props;
  const classes = useStyles();
  const AvatarComponent = (
    <Avatar className={clsx((index < 99) && classes.icon, (index >= 99) && classes.bigIcon)}>
      <Typography variant="h6">
        {index + 1}
      </Typography>
    </Avatar>
  );

  return (
    <Grid item xs={12} sm={12} className={classes.movieInfoCard}>
      <Card className={classes.root}>
        <CardHeader avatar={AvatarComponent} title={movieInfo.title} subheader={movieInfo.release_date} titleTypographyProps={{ variant: 'h5' }} />

        <CardActionArea href={`/MovieDetail/${movieInfo.id}`}>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {movieInfo.overview}
            </Typography>
          </CardContent>
          {movieInfo.poster_path &&
          <CardMedia
            component="img"
            className={classes.media}
            src={`https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`}
            title={`${movieInfo.title}`}
          />}
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={`/MovieDetail/${movieInfo.id}`}> 
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid >

  );
};
