import React from 'react';

function Crystal(props) {
  return (
    <img
      src={`./assets/images/Crystal-${props.src}.png`}
      alt="Crystal"
      value={props.value}
    />
  );
}

export default Crystal;
