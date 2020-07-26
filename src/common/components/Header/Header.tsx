import React from 'react';
import styled from '@emotion/styled';
import { Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AndroidIcon from '@material-ui/icons/Android';
import Avatar from '@material-ui/core/Avatar';

const GridContainer = styled(Grid)`
  padding: 10px 15px;
`;


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));
export const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <GridContainer container>
      <Grid item xs={12}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={2}>
            <Avatar className={classes.avatar}>
              <AndroidIcon />
            </Avatar>
          </Grid>
        </Grid>
      </Grid>
    </GridContainer>
  );
};
