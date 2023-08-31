import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import chevronDown from '../assets/images/ChevronDown.svg';

function AccordionItem({
  header,
  ...rest
}) {
  return (
    <Item
      header={(
        <>
          {header}
          <img className="chevron-down" src={chevronDown} alt="Chevron Down" />
        </>
      )}
    >
      {/* Nest children here */}
      {rest.children}
    </Item>
  );
}

AccordionItem.propTypes = {
  header: PropTypes.node.isRequired,
};

function AddService() {
  return (
    <div className="add__service">
      <h2 className="add__service__text">
        Job Title
      </h2>
      <input type="text" maxLength="30" className="add__service__input" />
      <h2 className="add__service__text add__service__text__second">
        Roles
      </h2>
      <Accordion className="accordion__add__service" transition transitionTimeout={250}>
        <AccordionItem header="House Jobs" initialEntered>
          <div className="add__service__child">
            <h2 className="add__service__child__text">House Cleaner</h2>
            <input type="checkbox" />
          </div>
          <div className="add__service__child">
            <h2 className="add__service__child__text">House Cleaner</h2>
            <input type="checkbox" />
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AddService;
