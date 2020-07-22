import * as React from 'react';

import NavLink from './NavLink';
import subMenu from './SubHeader.json';

const navTitle = 'News';

export default {
  title: 'Components/NavLink'
};

export const navLink = () => {
  return <NavLink subMenu={subMenu} navTitle={navTitle} />;
};
