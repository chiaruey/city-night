import React from 'react';
import { Avatar, Container, CssBaseline, Typography, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {usePopularMoviesState} from './usePopularMoviesState';
import MovieCreationTwoTone from '@material-ui/icons/MovieCreationTwoTone';

import { PopularMoviesResult } from './PopularMoviesResult';

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

export const PopularMovies: React.FC = () => {
    const {getPopularMovies , result, isInProgress } = usePopularMoviesState();

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <MovieCreationTwoTone />
                </Avatar>
                <Typography component="h1" variant="h5">Popular Movies</Typography>
                {isInProgress ? <CircularProgress /> : null}
            </div>
            <PopularMoviesResult popularMoviesResponse={result} popularMovies={getPopularMovies} result={result} isInProgress={isInProgress} />
        </Container>
    );

};