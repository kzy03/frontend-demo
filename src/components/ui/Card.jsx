import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`${className} m-auto w-lg min-w-md max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-xl`}>
      {children}
    </div>
  );
};

export default Card;
