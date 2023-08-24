import React from "react";

const Input = (props) => {
  return (
    <div className={props.className}>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.label}
      </label>
      <div className="mt-2">
        <input
          // pattern="\+95[0-9]{9}"
          {...props}          
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 focus:outline-purple-900"
          placeholder={props.placeholder}
          id={props.type}
          name={props.type}
          type={props.type}
          required
        />
      </div>
    </div>
  );
};

export default Input;
