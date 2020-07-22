import { string, object } from 'yup';

const defaultErrors = {
  movieTitleRequiredError: 'movie title is required'
};

export function searchValidation(
  errors: {
    movieTitleRequiredError: string;
  } = defaultErrors
) {
  return object().shape({
    movieTitle: string()
      .required(errors.movieTitleRequiredError)
  });
}
