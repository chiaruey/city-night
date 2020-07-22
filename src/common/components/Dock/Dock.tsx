import React from 'react';
import styled from '@emotion/styled';
import { Box, Link } from '@material-ui/core';
import { Home } from '@material-ui/icons';

const DockerBar = styled(Box)`
  background-color: #444444;
  color: white;
  line-height: 2rem;
  padding: 0 15px;

  selected {
    background-color: #636363;
  }

  svg {
    vertical-align: text-bottom;
    margin-right: 3px;
  }

  ol, ul {
    list-style: none;
  }

  li {
    display: inline;
    margin-right: 30px;
  }
`;

export const Dock: React.FC = () => {
  return (
    <DockerBar>
      <ul>
        <li>
          <Home fontSize="small" />
          <Link href="/" color="inherit">
            Home
        </Link>
        </li>
        <li>
          <Link href="/member" color="inherit" >
            Find a member
          </Link>
        </li>
        <li>
          <Link href="/pharmacy" color="inherit" >
            Find a network pharmacy
          </Link>
        </li>
      </ul>



    </DockerBar>
  );
};
