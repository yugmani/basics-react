import React from 'react';

const ChildComp = (props) => {
  return (
    <div>
      {/* calling a method in parent component from child component passing method as props without parameter */}
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      {/* passing a parameter in parent compoent from child component using arrow function */}
      <button onClick={() => props.greetHandler('Son & daughter')}>
        Greet Parent
      </button>
    </div>
  );
};

export default ChildComp;
