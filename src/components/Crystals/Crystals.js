import React from 'react';
import Crystal from './Crystal';

const Crystals = props =>
  props.vals.map((elem, index) => {
    return <Crystal key={index} value={elem} />;
  });

export default Crystals;

// // ********************
// const HelloWorld = ({name}) => (
//   <div>{`Hi ${name}`}</div>
//  );
// // **************************

// render() {
//   const data =[{"name":"test1"},{"name":"test2"}];
//   const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

//   return (
//     <div>
//     {listItems }
//     </div>
//   );
// }
