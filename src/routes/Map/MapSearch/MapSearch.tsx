import React, {useState} from 'react';
// import clsx from 'clsx';
import {
  Grid,
  Box,
  Button,
  Typography,
  FormControl,
  FormLabel
} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Form, Field, Formik, FormikHelpers} from 'formik';
import {TextField} from 'formik-material-ui';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {searchValidation} from './mapSearchValidation';
import {MapSearchPayload} from './MapSearchPayload';
import content from './MapSearchContent.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      fontSize: '16px'
    },
    paddingMargin0: {
      padding: 0,
      margin: 0
    },
    asterisk: {
      color: 'red'
    },
    header: {
      padding: '15px 7%',
      color: '#282a2e',
      boxShadow: '0px 1px 1px #B1B3B3'
    },
    fieldRequired: {
      padding: '15px 0'
    },
    textField: {
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(1),
      width: '80%',
      minWidth: '80%',
      '& .MuiInputAdornment-root': {
        display: 'inline-block !important',
        '& .MuiSvgIcon-root': {
          color: '#316bbe'
        },
        '& svg': {
          width: 'inherit !important',
          height: 'inherit !important',
          paddingTop: '5px'
        }
      }
    },
    standardTextFieldFormat: {
      width: '80%',
      padding: 0,
      margin: 0,
      '& .MuiSelect-icon': {
        // color: '#ffffff',
        // backgroundColor: '#316bbe',
        top: 0
      },
      '& .MuiSvgIcon-root': {
        height: '1.5em',
        width: '1.5em',
        right: 0
      },
      '& .MuiOutlinedInput-root': {
        borderRadius: '10px',
        height: '40px'
      }
    },
    fieldLabel: {
      paddingLeft: '5%',
      fontSize: '1em'
    },
    textFieldHelperText: {
      display: 'block'
    },
    textFieldInputLabel: {
      whiteSpace: 'nowrap'
    },
    radiusList: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
      width: 150,
      minWidth: 150
    },
    findMapButton: {
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(2),
      textTransform: 'none',
      backgroundColor: '#316bbe',
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 10,
      paddingBottom: 10
    },
    buttonIcon: {
      marginRight: 10
    },
    progress: {
      position: 'absolute',
      marginLeft: -30,
      marginTop: -10
    },
    warningText: {
      color: theme.palette.error.main
    },
    buttonGroup: {
      display: 'inline-flex'
    },
    searchCriteriaBox: {
      display: 'flex',
      padding: '15px 7%',
      boxShadow: '0px 1px 1px #B1B3B3',
      marginTop: theme.spacing(3)
    },
    block: {
      display: 'block'
    },
    submitGrid: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3)
    }
  })
);

interface FormValues {
  location: string;
}

interface MapSearchProps {
  // planData: PlansResponseData|undefined;
  // findMap: (filter: MapSearchPayload) => void;
  // isSearchInProgress: boolean;
}

export const MapSearch: React.FC<MapSearchProps> = (props) => {

  const {
    locationLabel,
    submitButtonLabel,
  } = content;

  const classes = useStyles();

  const submitForm = (formValues: FormValues, {setSubmitting}: FormikHelpers<FormValues>) => {
    const payload: MapSearchPayload = {
      location: formValues.location || undefined
    };

    // findMap(payload);
    setSubmitting(false);
  };

  const isEmpty = (val: string) => {
    return val === undefined || val === '';
  };

  const [expandFilter, setExpandFilter] = useState(false);

  const filterIcon = () => {
    if (expandFilter) {
      return <ExpandLessIcon fontSize="small" />;
    } else {
      return <ExpandMoreIcon fontSize="small" />;
    }
  };

  return (
    <Formik
      validationSchema={searchValidation}
      initialValues={{
        location: ''
      }}
      onSubmit={submitForm}
    >
      {({values, errors, touched, handleChange}) => (
        <Form>
          <Grid container className={classes.container}>
            <Grid item xs={12}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                className={classes.searchCriteriaBox}
              >
                <Grid container>
                  <Grid item xs={12}>
                    <FormControl className={classes.standardTextFieldFormat}>
                      <FormLabel component="legend">{locationLabel}</FormLabel>
                      <Field
                        name="location"
                        id="location"
                        required
                        // label={locationLabel}
                        variant="outlined"
                        component={TextField}
                        className={classes.textField}
                        FormHelperTextProps={{
                          classes: {root: classes.textFieldHelperText}
                        }}
                        InputLabelProps={{
                          classes: {root: classes.textFieldInputLabel}
                        }}
                        fullWidth
                        helperText={touched.location && errors.location}
                      />
                    </FormControl>
                  </Grid>
                   <Grid item xs={12} className={classes.submitGrid}>
                    <Button type="submit" variant="contained" color="primary">
                      {submitButtonLabel}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
