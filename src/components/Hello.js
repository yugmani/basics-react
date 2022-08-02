import React from 'react';

const Hello = () => {
  //With JSX
  //   return (
  //     <div id="text-content" className="text-wrapper">
  //       <h3>I am Yoog</h3>
  //     </div>
  //   );
  // };

  // without JSX
  return React.createElement(
    'div',
    // null,
    { id: 'text-content', className: 'text-wrapper' },
    React.createElement('h1', null, 'I am Yoog')
  );
};

export default Hello;
