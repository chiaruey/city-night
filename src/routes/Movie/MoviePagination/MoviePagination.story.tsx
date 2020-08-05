import * as React from 'react';
import {withKnobs} from '@storybook/addon-knobs';

import {MoviePagination} from '.';

export default {
  title: 'Components/Pagination',
  decorators: [withKnobs]
};

export const PaginationStory = () => {
  const [page, setPage] = React.useState(1);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return <MoviePagination recordCount={100} selectedPage={page} onChange={handleChangePage} />;
};
