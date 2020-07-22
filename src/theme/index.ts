import {createMuiTheme} from '@material-ui/core/styles';

import {ExplorerDefault} from './ExplorerDefault';

const MuiDefaultTheme = createMuiTheme({
  typography: {
    fontFamily: ['Garamond', 'Arial', 'Helvetica'].join(',')
  }
});

const themeList = {
  'Material UI Theme': MuiDefaultTheme,
  'Explorer Default Theme': ExplorerDefault
};
export {themeList};
