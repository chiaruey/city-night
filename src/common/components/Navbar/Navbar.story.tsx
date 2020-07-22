import * as React from 'react';

import Navbar from './Navbar';
import content from './NavbarContent.json'

export default {
  title: 'Structure/Navbar'
};

export const navbar = () => {
  return <Navbar content={content} />;
};
