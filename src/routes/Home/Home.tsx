import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
export const Home: React.FC = () => {

  let img_src = '/static/images/Starry-Night.jpg';
  return (
    <Container maxWidth="sm">
      <Box my={4}>
      <img src={img_src} />
      </Box>
    </Container>
  );
}