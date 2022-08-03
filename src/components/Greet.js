import React from 'react';

// //named export
// export const Greet = () => {
//   return <h1>Hello Yug</h1>;
// };

//default export
// const Greet = (props) => {
//   return (
//     <div>
//       <h1>
//         Hello {props.name} from {props.location}
//       </h1>
//       {props.children}
//     </div>
//   );
// };

//Destructuring props
// const Greet = ({ name, location, children }) => {
//   return (
//     <div>
//       <h1>
//         Hello {name} from {location}
//       </h1>
//       {children}
//     </div>
//   );
// };

//Alternative destructuring props
const Greet = (props) => {
  const { name, location, children } = props;
  
  return (
    <div>
      <h1>
        Hello {name} from {location}
      </h1>
      {children}
    </div>
  );
};

export default Greet;
