import React from 'react';
import { Button, Grid, Typography, CardHeader, CardContent, CardMedia, Card, CardActions, CardActionArea } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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

interface HeroImageCardProps {
  title: string;
  artist: string;
  year: string;
  src: string;
}

export const HeroImageCard: React.FC<HeroImageCardProps> = (props) => {
  const { title, artist, year, src} = props;
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} className={classes.movieInfoCard}>
      <Card className={classes.root}>
        <CardHeader title={title} titleTypographyProps={{ variant: 'h5' }} />

        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {artist} , {year}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            className={classes.media}
            src={src}
            title={title}
          />
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid >

  );
};
