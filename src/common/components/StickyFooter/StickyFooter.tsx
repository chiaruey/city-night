import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { colors } from '../../../theme/variables';

export function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: colors.saddlebrown,
    color: colors.white
  },
}));

export const StickyFooter: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </footer>
  );
}  