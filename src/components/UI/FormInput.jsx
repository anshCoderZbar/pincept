import React from "react";

export const FormInput = (props) => {
  return (
    <input
      type={props?.type}
      class="form-control"
      placeholder={props?.placeholder}
      {...props}
    />
  );
};
