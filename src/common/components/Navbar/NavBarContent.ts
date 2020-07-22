import {SubHeader} from '../NavLink/NavLinkContent';

export interface NavContent {
  subHeader: SubHeader[];
}

interface NavBarContent {
  leftNavbar: SubHeader[];
  rightNavbar: SubHeader[];
}

export interface NavBarProps {
  content: NavBarContent;
}
