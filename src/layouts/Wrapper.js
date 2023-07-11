import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Offer from '../pages/Offer';

function Wrapper(props) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Offer />
      <Footer />
    </>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Wrapper;
