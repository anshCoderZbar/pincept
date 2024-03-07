import React from "react";
import OtpInput from "react-otp-input";

import { Modal } from "components";

export const OtpForm = (props) => {
  const { modalId, otp, setOtp, resendButton, onClick } = props;
  return (
    <Modal
      id={modalId}
      backdrop="static"
      modalClass="sddxzxxx"
      contentClass="sadxx"
      bodyClass="Continuesd Resetasa"
    >
      <h1 className="modal-title sddcx" id="exampleModalToggleLabel">
        Verify your email
      </h1>
      <p id="vOtpErr">Please enter the 4 digit code sent to xyz@gmail.com</p>
      <div className="verification-code">
        <div className="verification-code--inputs">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>
      </div>
      <div className="ty_s x_ccc">
        <button className="Sign_in clickthssss" type="button" onClick={onClick}>
          Verify
        </button>
      </div>
      {resendButton === true ? (
        <div className="ty_s x_ccc">
          <button className="Sign_in clickthssss" type="button">
            Resend
          </button>
        </div>
      ) : null}
    </Modal>
  );
};
