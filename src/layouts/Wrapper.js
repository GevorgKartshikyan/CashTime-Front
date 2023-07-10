import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Button from '../components/Button';

function Wrapper(props) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Button title="Test Button" className="global_btn" />
      <Footer />
    </>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Wrapper;
