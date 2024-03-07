import React from "react";

import { FormInput, Modal } from "components";
import { MODAL_IDS } from "lib/constants/modal-ids";
import { OtpForm } from "./OtpForm";
import { useState } from "react";

export const ForgetPassword = ({ modalId }) => {
  const [otp, setOtp] = useState("");

  const handleVerifyOtp = () => {
    console.log(otp);
  };

  return (
    <>
      <Modal
        id={modalId}
        modalClass="sddxzxxx"
        contentClass="sadxx"
        bodyClass="Continuesd Resetasa"
      >
        <h1 className="modal-title sddcx" id="exampleModalToggleLabel">
          Reset Password
        </h1>
        <p>
          Please enter your email address and we’ll send you a OTP to reset your
          password.
        </p>
        <form>
          <div className="ty_s">
            <FormInput type="text" placeholder="Enter Your Email Address" />
          </div>
          <div className="ty_s x_ccc">
            <button
              className="Sign_in"
              type="button"
              data-bs-target={`#${MODAL_IDS.OTP_FORGOT_PASSWORD}`}
              data-bs-toggle="modal"
            >
              Send
            </button>
          </div>
          <div className="ty_s acco_sd">
            <span>back to</span>
            <a
              href="/#"
              data-bs-target={`#${MODAL_IDS.SIGNUP_MODAL}`}
              data-bs-toggle="modal"
            >
              SIGN IN
            </a>
          </div>
        </form>
      </Modal>

      <OtpForm
        modalId={MODAL_IDS.OTP_FORGOT_PASSWORD}
        resendButton={false}
        otp={otp}
        setOtp={setOtp}
        onClick={handleVerifyOtp}
      />

      <Modal
        id={MODAL_IDS.NEW_PASSWORD}
        modalClass="sddxzxxx"
        contentClass="sadxx"
        bodyClass="Continuesd Resetasa"
      >
        <h1 class="modal-title sddcx" id="exampleModalToggleLabel">
          Create New Password
        </h1>
        <p>
          Your new password must be different from your previously used
          passwords.
        </p>
        <form>
          <div class="ty_s">
            <ForgetPassword
              type="password"
              placeholder="New Password"
              autoComplete="false"
            />
          </div>
          <div class="ty_s">
            <ForgetPassword
              type="password"
              placeholder="Confirm New password"
              autoComplete="false"
            />
          </div>
          <div class="ty_s x_ccc">
            <button
              class="Sign_in"
              type="button"
              data-bs-target={`#${MODAL_IDS.LOGIN_MODAL}`}
              data-bs-toggle="modal"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
