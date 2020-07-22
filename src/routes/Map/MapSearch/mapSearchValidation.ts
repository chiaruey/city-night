import {string, object} from 'yup';

const defaultErrors = {
  zipRequiredError: 'zip code is required',
  zipCodeMin5Error: 'zip code has a minimun of 5 character',
  zipCodeMax18Error: 'zip code has a maximum of 18 character'
};

export function searchValidation(
  errors: {
    zipRequiredError: string;
    zipCodeMin5Error: string;
    zipCodeMax18Error: string;
  } = defaultErrors
) {
  return object().shape({
    zip: string()
      .min(5, errors.zipCodeMin5Error)
      .max(18, errors.zipCodeMax18Error)
      .required(errors.zipRequiredError)
  });
}
