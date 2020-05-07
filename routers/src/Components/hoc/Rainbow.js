//Higher order component we will apply this component over a component and make it supercharged component
// as we apply this Rainbow componenet over About compoenent
//Every time we refresh we get different color of text
//props in return function take parameters from wrapperd components if has any

import React from "react";

const Rainbow = (WrappedComponent) => {
  const colours = ["red", "pink", "orange", "blue", "green", "yellow"];
  const randomColour = colours[Math.floor(Math.random() * 6)];
  const classNames = randomColour + "-text";

  return (props) => {
    return (
      <div className={classNames}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
