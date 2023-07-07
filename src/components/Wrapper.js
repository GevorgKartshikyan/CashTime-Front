import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

function Wrapper(props) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Wrapper;
