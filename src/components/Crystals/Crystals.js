import React from 'react';
import Crystal from './Crystal';

function Crystals(props) {
  props.vals.forEach((elem, index) => {
    return <Crystal id={index} value={elem} />;
  });
}
export default Crystals;
