import React from 'react';

const FunctionClick = () => {
  //event handler
  const clickHandler = () => {
    console.log('Button is clicked');
  };

  return (
    <div>
      <button onClick={clickHandler}>Function Click</button>
    </div>
  );
};

export default FunctionClick;
