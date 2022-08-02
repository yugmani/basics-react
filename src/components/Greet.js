import React from 'react';

// //named export
// export const Greet = () => {
//   return <h1>Hello Yug</h1>;
// };

//default export
const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} from {props.location}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
