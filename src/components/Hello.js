import React from 'react';

const Hello = (props) => {
  //With JSX
  return (
    <div id="text-content" className="text-wrapper">
      <h3>{props.greet} from Yoog</h3>
    </div>
  );
};

// without JSX
//   return React.createElement(
//     'div',
//     // null,
//     { id: 'text-content', className: 'text-wrapper' },
//     React.createElement('h1', null, `${props.greet} from Yoog`)
//   );
// };

export default Hello;
