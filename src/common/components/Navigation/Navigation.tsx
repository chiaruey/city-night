import React from 'react';
import styled from '@emotion/styled';
import { AppBar, Grid, Toolbar, IconButton, Typography, List, ListItem, Drawer, Divider, ClickAwayListener } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Link from 'next/link';

const GridContainer = styled(Grid)`
  padding: 10px 15px;
`;

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#212121',
    fontSize: '1.3em'
  }
}));
export const Navigation: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickAway = () => {
    handleDrawerClose();
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <GridContainer container>
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={2}>
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                  City Night
               </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItem button key='Home' onClick={handleDrawerClose}>
                  <Link href='/' as='/'>
                    <a className={classes.link}>Home</a>
                  </Link>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button key='Movie Search' onClick={handleDrawerClose}>
                  <Link href='/MovieSearch' as='/MovieSearch' >
                    <a className={classes.link}>Movie Search</a>
                  </Link>
                </ListItem>
                <ListItem button key='Popular Movies' onClick={handleDrawerClose}>
                  <Link href='/PopularMovies' as='/PopularMovies' >
                    <a className={classes.link}>Popular Movies</a>
                  </Link>
                </ListItem>                
              </List>
              <Divider />
              <List>
                <ListItem button key='CNN' onClick={handleDrawerClose}>
                  <a href='http://www.cnn.com' target='_blank' className={classes.link}>CNN</a>
                </ListItem>
                <ListItem button key='Daily Mail' onClick={handleDrawerClose}>
                  <a href='https://www.dailymail.co.uk/ushome/index.html' target='_blank' className={classes.link}>Daily Mail</a>
                </ListItem>
                <ListItem button key='Fox News' onClick={handleDrawerClose}>
                  <a href='https://www.foxnews.com/' target='_blank' className={classes.link}>Fox News</a>
                </ListItem>
              </List>
            </Drawer>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />
            </main>
          </Grid>
        </Grid>
      </GridContainer>
    </ClickAwayListener>

  );
};
