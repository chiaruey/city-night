import React from 'react';
import { Avatar, Container, CssBaseline, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MovieCreationTwoTone from '@material-ui/icons/MovieCreationTwoTone';
import {useMovieDetailState} from './useMovieDetailState';
import {MovieDetailPayload} from './MovieDetailPayload';
import {useRouter} from 'next/router';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    container: {
        fontSize: '16px'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    paddingMargin0: {
        padding: 0,
        margin: 0
    }
}));

export const MovieDetail: React.FC = () => {
    const router = useRouter();
    const { movieId } = router.query;
    console.log('movieId == ' + movieId);
    console.log('routerQuery = ', router.query);
    const {fetchMovieDetail , result } = useMovieDetailState();
    if (typeof movieId === "string") {
        const payload: MovieDetailPayload = {
            movieId: parseInt(movieId),
        };
        fetchMovieDetail(payload);
    }


    

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <MovieCreationTwoTone />
                </Avatar>
                {result && 
                <Typography component="h1" variant="h5">result.title</Typography>
                }
                

            </div>
        </Container>
    );

};