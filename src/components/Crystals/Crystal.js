import React from 'react';

function Crystal(props) {
  return (
    <img
      src={`./assets/images/Crystal-${props.key + 1}.png`}
      alt="Crystal"
      value={props.value}
    />
  );
}

export default Crystal;
