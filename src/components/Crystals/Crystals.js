import React from 'react';
import Crystal from './Crystal';

const Crystals = props =>
  props.vals.map((elem, index) => {
    return (
      <Crystal
        onClick={props.onClick}
        key={index}
        value={elem}
        src={parseInt(index) + 1}
      />
    );
  });

export default Crystals;
