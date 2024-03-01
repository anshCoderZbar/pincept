import React, { useState } from "react";
import OtpInput from "react-otp-input";

export const OtpVerification = ({ modalId }) => {
  const [otp, setOtp] = useState("");
  return (
    <div
      class="modal fade"
      id={modalId}
      aria-hidden="true"
      aria-labelledby={modalId}
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered sddxzxxx">
        <div class="modal-content sadxx">
          <div class="modal-body Continuesd Resetasa">
            <h1 class="modal-title sddcx" id="exampleModalToggleLabel">
              Verify your email
            </h1>
            <p id="vOtpErr">
              Please enter the 4 digit code sent to xyz@gmail.com
            </p>
            <div class="verification-code">
              <div class="verification-code--inputs">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
            </div>
            <div class="ty_s x_ccc">
              <button
                class="Sign_in clickthssss"
                type="button"
                onClick={() => console.log(otp)}
              >
                Verify<span class="addLoaderThis"></span>
              </button>
            </div>
            <div class="ty_s x_ccc">
              <button class="Sign_in clickthssss" type="button">
                Resend<span class="addLoaderThis"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
