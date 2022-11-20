import { HiArrowLeft } from 'react-icons/hi';
import * as SC from './BackBtn.styled';
import PropTypes from 'prop-types';

export const BackBtn = ({ to, children }) => {
  return (
    <SC.Link to={to}>
      <HiArrowLeft size="24" />
      {children}
    </SC.Link>
  );
};

BackBtn.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};
