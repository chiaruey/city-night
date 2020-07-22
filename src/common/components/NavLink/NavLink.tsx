import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Menu, MenuItem, Link, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NextLink from 'next/link';
import {colors} from '../../../theme/variables';
import {SubHeader} from './NavLinkContent';

interface NavLinkProps {
  subMenu?: SubHeader[];
  navTitle?: string;
  navType?: string;
  navUrl?: string;
  navPath?: string;
  navTarget?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: 48,
    backgroundColor: colors.deepSkyBlue,
    width: '100%'
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

  paper: {
    marginRight: theme.spacing(2),
    backgroundColor: colors.deepSkyBlue,
    color: colors.white
  },
  menuList: {
    backgroundColor: colors.deepSkyBlue
  },

  marginLeft0: {
    marginLeft: 0
  },

  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex',
  },

  link: {
    backgroundColor: colors.deepSkyBlue,
    textDecoration: 'none',
    color: colors.white,
    '&:hover': {
      textDecoration: 'none'
    },
    paddingLeft: 5
  },

  marginTop3: {
    marginTop: '3px !important'
  }
}));

// for external link, it will return an anchor, for internal link, it will return a Link
const generateLink = (
  classes: any,
  navTitle: string | undefined,
  navType: string | undefined,
  navUrl: string | undefined,
  navPath: string | undefined,
  navTarget: string | undefined
) => {
  if (navType === 'external') {
    return (
      <a href={navUrl} target={navTarget} className={classes.link}>
        {navTitle}
      </a>
    );
  } else {
    return (
      <NextLink href={navPath || ''} as={navUrl || ''}>
        <a className={classes.link}>{navTitle}</a>
      </NextLink>
    );
  }
};

export default function NavLink({subMenu, navTitle, navPath, navType, navUrl, navTarget}: NavLinkProps) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const menuItems = subMenu as Array<SubHeader>;

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (menuItems) {
    return (
      <>
        <Link onClick={handleClick} className={classes.link}>
          <Typography className={classes.wrapIcon}>
            <span className={classes.marginTop3} />
            {navTitle}
            <ExpandMoreIcon fontSize="small" />
          </Typography>
        </Link>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PopoverClasses={{
            paper: classes.menu
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          getContentAnchorEl={null}
        >
          {menuItems.map(({title, path, url, target, type}) => (
            <MenuItem key={title} onClick={handleClose} className={classes.menuItem}>
              {generateLink(classes, title, type, url, path, target)}
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  } else {
    return (
      <Typography className={classes.wrapIcon}>
        {generateLink(classes, navTitle, navType, navUrl, navPath, navTarget)}
      </Typography>
    );
  }
}
