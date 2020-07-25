import React from 'react';
import { Avatar, Button, Container, CssBaseline, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Field, Formik, FormikHelpers } from 'formik';
import { TextField } from 'formik-material-ui';
import { searchValidation } from './movieSearchValidation';
import { MovieSearchPayload } from './MovieSearchPayload';
import MovieCreationTwoTone from '@material-ui/icons/MovieCreationTwoTone';

import {useMovieSearchState} from './useMovieSearchState';

import { MovieSearchResult } from './MovieSearchResult';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
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

interface FormValues {
    movieTitle: string;
}

export const MovieSearch: React.FC = () => {
    const {searchForMovie , result, isInProgress} = useMovieSearchState();

    const classes = useStyles();

    const submitForm = (formValues: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
        const payload: MovieSearchPayload = {
            query: formValues.movieTitle,
            page: 1
        };

        searchForMovie(payload);
        setSubmitting(false);
    }

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <MovieCreationTwoTone />
                </Avatar>
                <Typography component="h1" variant="h5">Search Movies </Typography>
                <Formik
                    validationSchema={searchValidation}
                    initialValues={{
                        movieTitle: ''
                    }}
                    onSubmit={submitForm}
                >
                    {({ values, errors, touched, handleChange }) => (
                        <Form className={classes.form} >

                            <Field
                                name="movieTitle"
                                id="movieTitle"
                                required
                                variant="outlined"
                                label="Movie Title"
                                autoFocus
                                component={TextField}
                                fullWidth
                                helperText={touched.movieTitle && errors.movieTitle}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Submit 
                            </Button>

                        </Form>
                    )}
                </Formik>
            </div>
            <MovieSearchResult movieSearchResponse={result} />
        </Container>
    );

};