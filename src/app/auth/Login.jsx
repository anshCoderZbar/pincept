import React from "react";

import facebookLogo from "assets/Facebook.svg";
import googleLogo from "assets/google.svg";
import { FormInput, Modal } from "components";
import { MODAL_IDS } from "lib/constants/modal-ids";
import { ForgetPassword } from "./ForgetPassword";

export const Login = ({ modalId }) => {
  return (
    <>
      <Modal
        id={modalId}
        modalClass="sddxzxxx"
        contentClass="sadxx"
        bodyClass="Continuesd"
      >
        <h1 className="modal-title sddcx" id={modalId}>
          Sign in to <span>Pincept</span>
        </h1>
        <a href="/#" className="Facebook">
          <span>
            <img src={facebookLogo} className="img-fluid" alt="facebook" />
          </span>
          Continue With Facebook
        </a>
        <a href="/#" className="Facebook google-s">
          <span>
            <img src={googleLogo} className="img-fluid" alt="google" />
          </span>
          Continue With google
        </a>
        <div className="or">
          <span>or</span>
        </div>
        <form id="loginform">
          <div className="ty_s">
            <FormInput
              type="text"
              placeholder="Email address or username"
              name="email"
            />
            <small className="invalid-feedback" id="emailErr"></small>
          </div>
          <div className="ty_s">
            <div className=" passeye__icon">
              <FormInput
                type="Password"
                placeholder="Password"
                name="password"
                autoComplete="false"
              />
              <i className="bi bi-eye-slash" id="togglePassword"></i>
            </div>
            <small className="invalid-feedback" id="passErr"></small>
          </div>
          <div className="check_s">
            <div className="q-sz">
              <div className="checkbox">
                <input
                  className="custom-checkbox"
                  type="checkbox"
                  id="remember"
                  name="remember"
                />
                <label htmlFor="remember">Remember me?</label>
              </div>
            </div>
            <div className="q-sz">
              <a
                href="/#"
                data-bs-target={`#${MODAL_IDS.FORGOT_PASSWORD}`}
                data-bs-toggle="modal"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="ty_s">
            <button className="Sign_in" type="submit">
              Sign In <span className="addLoaderThis"></span>
            </button>
          </div>
          <div className="ty_s acco_sd">
            <span> doesn’t have an account?</span>
            <a
              href="/#"
              data-bs-target={`#${MODAL_IDS.SIGNUP_MODAL}`}
              data-bs-toggle="modal"
            >
              SIGN UP NOW
            </a>
          </div>
        </form>
      </Modal>

      <ForgetPassword modalId={MODAL_IDS.FORGOT_PASSWORD} />
    </>
  );
};
