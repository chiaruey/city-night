import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline, ListItem, List, Toolbar, AppBar} from '@material-ui/core';

import NavLink from '../NavLink/NavLink';
import {SubHeader} from '../NavLink/NavLinkContent';
import {colors} from '../../../theme/variables';
import {NavBarProps} from './NavBarContent';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 48,
    backgroundColor: colors.deepSkyBlue,
    width: '100%'
  },

  toolbar: {
    minHeight: 48,
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '6%',
    paddingRight: '6%',
    [theme.breakpoints.down('sm')]: {
      // backgroundColor: "yellow",
      paddingLeft: 0,
      paddingRight: 0,
      justifyContent: 'space-around'
    }
    // border: "1px solid red"
  },

  menu: {
    color: colors.white,
    backgroundColor: colors.deepSkyBlue
  },
  menuItem: {
    paddingLeft: 5,
    color: colors.white,
    backgroundColor: colors.deepSkyBlue
  },

  listStyles: {display: 'flex', flexDirection: 'row'},

  listItemStyle: {
    width: 'auto',
    paddingLeft: 0,
    paddingRight: 0,
    margin: '0 16px',
    // whiteSpace: "nowrap",
    [theme.breakpoints.down('sm')]: {
      margin: '0 8px'
    }
  },

  paper: {
    marginRight: theme.spacing(2),
    backgroundColor: colors.deepSkyBlue,
    color: colors.white
  },
  appBar: {
    backgroundColor: colors.deepSkyBlue
  },
  marginLeft0: {
    marginLeft: 0
  },
  toolBar: {
    marginLeft: theme.spacing(1)
  },
  link: {
    color: colors.white,
    backgroundColor: colors.deepSkyBlue,
    '&:hover': {
      textDecoration: 'none'
    }
  }
}));

const navItem = (
  classes: any,
  path: string | undefined,
  title: string | undefined,
  type: string | undefined,
  url: string | undefined,
  target: string | undefined,
  children: Array<SubHeader> | undefined
) => {
  if (children) {
    return (
      <ListItem className={classes.listItemStyle} key={title}>
        <NavLink navTitle={title} subMenu={children} />
      </ListItem>
    );
  } else {
    return (
      <ListItem className={classes.listItemStyle} key={title}>
        <NavLink navTitle={title} navType={type} navUrl={url} navTarget={target} navPath={path} />
      </ListItem>
    );
  }
};

export default function Navbar(props: NavBarProps) {
  const classes = useStyles();
  const {content} = props;

  if (content) {
    return (
      <AppBar className={classes.root} position="static">
        <CssBaseline />
        <Toolbar className={classes.toolbar}>
          <List className={classes.listStyles} component="ul">
            {content.leftNavbar &&
              content.leftNavbar.map(({title, path, type, url, target, children}) =>
                navItem(classes, path, title, type, url, target, children)
              )}
          </List>
          <List className={classes.listStyles} component="ul">
            {content.rightNavbar &&
              content.rightNavbar.map(({title, path, type, url, target, children}) =>
                navItem(classes, path, title, type, url, target, children)
              )}
          </List>
        </Toolbar>
      </AppBar>
    );
  } else {
    return <>Sorry, we are having some technical difficulties. Please try again later.</>;
  }
}
