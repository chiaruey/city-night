import React from 'react';
import {usePagination, UsePaginationItem} from '@material-ui/lab';
import {makeStyles, Theme} from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Button, Link, Box} from '@material-ui/core';
import clsx from 'clsx';

import {colors} from '../../../theme/variables';

const useStyles = makeStyles((theme: Theme) => ({
  pagination: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    width: '100%'
  },
  hide: {display: 'none'},
  page: {
    width: '6%',
    paddingLeft: '2%',
    [theme.breakpoints.down('sm')]: {
      width: '10%'
    }
  },
  selectedPage: {
    width: '6%',
    paddingLeft: '2%',
    borderBottomWidth: '3px',
    borderBottomColor: colors.deepSeaBlue,
    borderBottomStyle: 'inset',
    '&:hover': {
      outline: 'auto',
      outlineColor: '#F2B411'
    },
    [theme.breakpoints.down('sm')]: {
      width: '10%'
    }
  },
  prevButtonBox: {
    margin: '0 1% !important',
    border: '0 !important',
    float: 'left',
    width: '40%'
  },
  prevButton: {
    margin: '0 1% !important',
    border: '0 !important',
    backgroundColor: `${colors.white} !important`,
    color: `${colors.deepSeaBlue} !important`,
    float: 'left',
    width: '50%',
    '&:hover': {
      outline: 'auto',
      outlineColor: '#F2B411'
    }
  },
  nextButtonBox: {
    margin: '0 1% !important',
    border: '0 !important',
    float: 'right',
    width: '40%'
  },
  nextButton: {
    margin: '0 1% !important',
    border: '0 !important',
    backgroundColor: `${colors.white} !important`,
    color: `${colors.deepSkyBlue} !important`,
    float: 'right',
    width: '50%',
    '&:hover': {
      outline: 'auto',
      outlineColor: '#F2B411'
    }
  },
  buttonText: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

interface PaginationProps {
  recordCount: number;
  selectedPage: number;
  onChange: any;
}

export const Pagination: React.FC<PaginationProps> = (props) => {
  const {recordCount, selectedPage, onChange} = props;
  const pageCount = Math.ceil(recordCount / 5);
  const classes = useStyles();
  const {items} = usePagination({
    count: pageCount,
    onChange,
    page: selectedPage,
    siblingCount: 3,
    showFirstButton: false
  });

  // Filter out extra items to show only 4 pages per optum standard
  const getFilteredItems = () => {
    const filteredItems: UsePaginationItem[] = [];

    let i = 0;
    for (i = 0; i < items.length; i += 1) {
      const item = items[i];

      let showPage = true;

      if (item.type === 'page' && item.page - selectedPage >= 4) {
        showPage = false;
      }
      if (item.type === 'page' && pageCount - selectedPage >= 4 && item.page < selectedPage) {
        showPage = false;
      }

      if (item.type === 'page' && pageCount - selectedPage <= 3 && pageCount - item.page > 3) {
        showPage = false;
      }

      if (showPage) {
        filteredItems.push(item);
      }
    }
    return filteredItems;
  };

  const onFirstPage = selectedPage === 1;
  const onLastPage = selectedPage === pageCount;

  return (
    <nav>
      <ul className={classes.pagination}>
        {getFilteredItems().map(({page, type, ...item}) => {
          let children = null;
          if (type === 'page') {
            children = (
              <Link link-id={`cta_pagination_page_${page}`} component="button" variant="body2" {...item}>
                {page}
              </Link>
            );
            return (
              <li
                key={`${page}`}
                className={clsx(
                  page === selectedPage && classes.selectedPage,
                  page === 1 && page - 4 >= 1 && classes.hide,
                  page === pageCount && pageCount - page > 4 && classes.hide,
                  page !== selectedPage && classes.page
                )}
              >
                {children}
              </li>
            );
          } else if (type === 'previous') {
            children = (
              <Button
                {...item}
                className={clsx(onFirstPage && classes.hide, !onFirstPage && classes.prevButton)}
                startIcon={<ArrowBackIosIcon />}
                link-id="cta_pagination_previous"
              >
                <Box className={classes.buttonText}>Previous</Box>
              </Button>
            );
            return (
              <li key={type} className={classes.prevButtonBox}>
                {children}
              </li>
            );
          } else if (type === 'next') {
            children = (
              <Button
                {...item}
                className={clsx(onLastPage && classes.hide, !onLastPage && classes.nextButton)}
                endIcon={<ArrowForwardIosIcon />}
                link-id="cta_pagination_next"
              >
                <Box className={classes.buttonText}>Next</Box>
              </Button>
            );
            return (
              <li key={type} className={classes.nextButtonBox}>
                {children}
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </nav>
  );
};
