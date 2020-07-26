import * as React from 'react';
import {configure, addDecorator, addParameters} from '@storybook/react';
import {themeList} from '../src/theme';
import {withA11y} from '@storybook/addon-a11y';

// configure accessibility addon
addDecorator(withA11y);


addParameters({
  themeConfig: {
    themes: themeList,
    default: 'Material UI Theme'
  }
});

configure(require.context('../src', true, /\.story\.tsx?/), module);
