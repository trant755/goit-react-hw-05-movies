import { Link } from 'react-router-dom';
import { Box } from 'components/Box';
import * as SC from './MoreMovieInfo.styled';

const MoreMovieInfo = () => {
  return (
    <Box p={4} borderTop={'midle'} borderBottom={'midle'} borderColor={'dark'}>
      <SC.Title>Additional information</SC.Title>
      <SC.LinkList as="ul">
        <SC.ListItem>
          <Link to="cast">Cast</Link>
        </SC.ListItem>
        <SC.ListItem>
          <Link to="reviews">Reviews</Link>
        </SC.ListItem>
      </SC.LinkList>
    </Box>
  );
};

export default MoreMovieInfo;
