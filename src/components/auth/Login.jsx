// default import
import React from "react";
import { useAtom } from "jotai";

// custom imports
import { isLoginActive } from "store/authStore";

// images
import facebookLogo from "assets/Facebook.svg";
import googleLogo from "assets/google.svg";
import { FormInput } from "components/UI/FormInput";

export const Login = ({ modalId }) => {
  const [isModalActive] = useAtom(isLoginActive);
  return (
    <>
      {isModalActive && (
        <div
          class="modal fade"
          id={modalId}
          aria-hidden="true"
          aria-labelledby={modalId}
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered  sddxzxxx">
            <div class="modal-content sadxx">
              <div class="modal-body Continuesd">
                <h1 class="modal-title sddcx" id={modalId}>
                  Sign in to <span>Pincept</span>
                </h1>
                <a href={"{{ url('auth/facebook') }}"} class="Facebook">
                  <span>
                    <img src={facebookLogo} class="img-fluid" />
                  </span>
                  Continue With Facebook
                </a>
                <a href="{{ url('auth/google') }}" class="Facebook google-s">
                  <span>
                    <img src={googleLogo} class="img-fluid" />
                  </span>
                  Continue With google
                </a>
                <div class="or">
                  <span>or</span>
                </div>
                <form id="loginform">
                  <div class="ty_s">
                    <FormInput
                      type="text"
                      placeholder="Email address or username"
                      name="email"
                    />
                    <small class="invalid-feedback" id="emailErr"></small>
                  </div>
                  <div class="ty_s">
                    <div class=" passeye__icon">
                      <FormInput
                        type="Password"
                        placeholder="Password"
                        name="password"
                      />
                      <i class="bi bi-eye-slash" id="togglePassword"></i>
                    </div>
                    <small class="invalid-feedback" id="passErr"></small>
                  </div>
                  <div class="check_s">
                    <div class="q-sz">
                      <div class="checkbox">
                        <input
                          class="custom-checkbox"
                          type="checkbox"
                          id="remember"
                          name="remember"
                        />
                        <label for="remember">Remember me?</label>
                      </div>
                    </div>
                    <div class="q-sz">
                      <a
                        data-bs-target="#exampleModalToggle4"
                        data-bs-toggle="modal"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div class="ty_s">
                    <button class="Sign_in" type="submit">
                      Sign In <span class="addLoaderThis"></span>
                    </button>
                  </div>
                  <div class="ty_s acco_sd">
                    <span> doesn’t have an account?</span>
                    <a
                      href="javascript:viod(0)"
                      data-bs-target="#signUpModal"
                      data-bs-toggle="modal"
                    >
                      SIGN UP NOW
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
