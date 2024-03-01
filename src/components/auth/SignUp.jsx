import React from "react";

import { FormInput } from "components/UI/FormInput";
import { OtpVerification } from "./Otp";

export const SignUp = ({ modalId }) => {
  return (
    <>
      <div
        class="modal fade"
        id={modalId}
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel9"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered sddxzxxx">
          <div class="modal-content sadxx">
            <div class="modal-body Continuesd">
              <h1 class="modal-title sddcx" id="exampleModalToggleLabel">
                Join <span>Pincept</span>
              </h1>
              <form>
                <div class="ty_s">
                  <FormInput type="text" placeholder="Username" name="name" />
                  <small id="usercheck" class="invalid-feedback">
                    Username Required
                  </small>
                </div>
                <div class="ty_s">
                  <FormInput type="text" placeholder="Email" name="email" />
                  <small id="emailcheck" class="invalid-feedback">
                    Email Required
                  </small>
                </div>
                <div class="ty_s">
                  <div class=" passeye__icon">
                    <FormInput
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                    <i class="bi bi-eye-slash" id="togglePassword-signup"></i>
                    <small id="passcheck" class="invalid-feedback">
                      Password Required
                    </small>
                  </div>
                </div>
                <div class="ty_s">
                  <FormInput
                    type="password"
                    placeholder="Confirm Password"
                    name="cpassword"
                  />
                  <small id="cpasscheck" class="invalid-feedback">
                    Confirm Required
                  </small>
                </div>
                <div class="ty_s x_ccc">
                  <button
                    class="Sign_in"
                    id="join"
                    type="button"
                    data-bs-target="#otpVerficationModal"
                    data-bs-toggle="modal"
                  >
                    Join
                    {/* <i id="loader" class="fa fa-spinner fa-spin"></i> */}
                  </button>
                </div>
                <div class="check_s">
                  <div class="q-sz">
                    <div class="checkbox">
                      <input
                        class="custom-checkbox "
                        type="checkbox"
                        id="termsCheckbox"
                        name="remember"
                      />
                      <label for="termsCheckbox" class="d-block">
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
                  {/* {{-- <div class="q-sz"><a href="javascript:viod(0)" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal">Forgot password?</a></div> --}} */}
                </div>
                <div class="ty_s acco_sd">
                  <span>Already a member?</span>
                  <a
                    href="javascript:viod(0)"
                    data-bs-target="#loginModal"
                    data-bs-toggle="modal"
                  >
                    SIGN IN NOW
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <OtpVerification modalId={"otpVerficationModal"} />
    </>
  );
};
