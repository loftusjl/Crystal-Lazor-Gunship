import React from 'react';

function Crystal(props) {
  return (
    <img
      src={`./assets/images/Crystal-${props.src}.png`}
      alt="Crystal"
      data-value={props.value}
      onClick={props.onClick}
    />
  );
}

export default Crystal;
