import React from 'react';

const Click = () => {
  
  //event handler
  const clickHandler = () => {
    console.log('Button clicked');
  };
  
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default Click;
