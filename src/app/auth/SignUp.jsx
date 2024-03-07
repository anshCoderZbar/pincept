import React, { useState } from "react";

import { FormInput, Modal } from "components";
import { OtpForm } from "./OtpForm";
import { MODAL_IDS } from "lib/constants/modal-ids";

export const SignUp = ({ modalId }) => {
  const [otp, setOtp] = useState("");

  const verifyEmailForSignUp = () => {
    console.log(otp);
  };

  return (
    <>
      <Modal
        id={modalId}
        modalClass="sddxzxxx"
        contentClass="sadxx"
        bodyClass="Continuesd"
      >
        <h1 className="modal-title sddcx" id="exampleModalToggleLabel">
          Join <span>Pincept</span>
        </h1>
        <form>
          <div className="ty_s">
            <FormInput type="text" placeholder="Username" name="name" />
            <small id="usercheck" className="invalid-feedback">
              Username Required
            </small>
          </div>
          <div className="ty_s">
            <FormInput type="text" placeholder="Email" name="email" />
            <small id="emailcheck" className="invalid-feedback">
              Email Required
            </small>
          </div>
          <div className="ty_s">
            <div className=" passeye__icon">
              <FormInput
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="false"
              />
              <i className="bi bi-eye-slash" id="togglePassword-signup"></i>
              <small id="passcheck" className="invalid-feedback">
                Password Required
              </small>
            </div>
          </div>
          <div className="ty_s">
            <FormInput
              type="password"
              placeholder="Confirm Password"
              name="cpassword"
              autoComplete="false"
            />
            <small id="cpasscheck" className="invalid-feedback">
              Confirm Required
            </small>
          </div>
          <div className="ty_s x_ccc">
            <button
              className="Sign_in"
              id="join"
              type="button"
              data-bs-target={`#${MODAL_IDS.OTP_VERIFICATION}`}
              data-bs-toggle="modal"
            >
              Join
              {/* <i id="loader" className="fa fa-spinner fa-spin"></i> */}
            </button>
          </div>
          <div className="check_s">
            <div className="q-sz">
              <div className="checkbox">
                <input
                  className="custom-checkbox "
                  type="checkbox"
                  id="termsCheckbox"
                  name="remember"
                />
                <label htmlFor="termsCheckbox" className="d-block">
                  I agree Pincept´s Terms of Service . Click
                  <a
                    href="{{url('/term-conditions')}}"
                    className="text-decoration-underline"
                  >
                    here
                  </a>
                  for the Terms
                </label>
              </div>
            </div>
          </div>
          <div className="ty_s acco_sd">
            <span>Already a member?</span>
            <a
              href="/#"
              data-bs-target={`#${MODAL_IDS.LOGIN_MODAL}`}
              data-bs-toggle="modal"
            >
              SIGN IN NOW
            </a>
          </div>
        </form>
      </Modal>
      <OtpForm
        modalId={MODAL_IDS.OTP_VERIFICATION}
        otp={otp}
        setOtp={setOtp}
        resendButton={true}
        onClick={verifyEmailForSignUp}
      />
    </>
  );
};
