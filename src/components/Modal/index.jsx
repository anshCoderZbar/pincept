import React from "react";

export const Modal = (props) => {
  return (
    <div
      className="modal fade"
      id={props?.id}
      tabIndex="-1"
      aria-labelledby={props?.id}
      aria-hidden="true"
      data-bs-backdrop={props?.backdrop}
    >
      <div
        className={`modal-dialog modal-dialog-centered ${props?.modalClass}`}
      >
        <div className={`modal-content ${props?.contentClass}`}>
          {props?.heading && (
            <div className={`modal-header ${props?.headClass}`}>
              <h1 className="modal-title" id={props?.id}>
                {props?.heading}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          )}
          <div className={`modal-body ${props?.bodyClass}`}>
            {props?.children}
          </div>
        </div>
      </div>
    </div>
  );
};
