import React from 'react';
import {Pagination} from '@material-ui/lab';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      '.MuiPagination-ul' : {
        margin: 'auto',
        width: 'fit-content'
      }
    }
  })
);
 
interface MoviePaginationProps {
  recordCount: number;
  selectedPage: number;
  onChange: any;
}
/*

*/
export const MoviePagination: React.FC<MoviePaginationProps> = (props) => {
  const {recordCount, selectedPage, onChange} = props;
  const pageCount = Math.ceil(recordCount / 20);

  useStyles();
  return (
    <Pagination count={pageCount} page={selectedPage} siblingCount={3} onChange={onChange} color="secondary" size="large" />
  );
};
