import React from "react";

export const FormInput = (props) => {
  return (
    <input
      type={props?.type}
      className="form-control"
      placeholder={props?.placeholder}
      {...props}
    />
  );
};
