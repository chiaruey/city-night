import {createMuiTheme} from '@material-ui/core';

import red from '@material-ui/core/colors/red';

const ExplorerDefault = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export {ExplorerDefault};
