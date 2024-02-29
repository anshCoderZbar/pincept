import React from "react";

import logo from "assets/logo.svg";

export const Footer = () => {
  return (
    <footer class="x-xs">
      <div class="line-s"></div>
      <div class="line-s2"></div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div class="Lorem-d">
              <div class="mi-s Ipsumasa">
                <img src={logo} class="img-fluid" alt="" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <ul class="social-media">
                  <li>
                    <a href="#">
                      <i class="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </a>
                  </li>
                </ul>
                <span class="Rightsasa">
                  ©2024 Architecture, 2024. All Rights Reserved.
                </span>
              </div>
              <div class="mi-s">
                <h6>Categories</h6>
                <ul class="social-media-links">
                  <li>
                    <a href="#">Interior Visualization</a>
                  </li>
                  <li>
                    <a href="#">Building Visualization</a>
                  </li>
                  <li>
                    <a href="#">Furniture Visualization</a>
                  </li>
                  <li>
                    <a href="#">Animation Video</a>
                  </li>
                  <li>
                    <a href="#">Landscape Visualization</a>
                  </li>
                </ul>
              </div>
              <div class="mi-s">
                <h6>Comapny</h6>
                <ul class="social-media-links">
                  <li>
                    <a href="{{ url('/') }}">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
              <div class="mi-s">
                <h6>Support</h6>
                <ul class="social-media-links">
                  <li>
                    <a href="{{ url('/term-of-use') }}">Terms of use</a>
                  </li>
                  <li>
                    <a href="{{ url('/term-conditions') }}">
                      Terms & Conditons
                    </a>
                  </li>
                  <li>
                    <a href="{{ url('/privacy-policy') }}">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="{{ url('/earnings') }}">Payments</a>
                  </li>
                </ul>
              </div>
              <div class="mi-s">
                <h6>Contact</h6>
                <ul class="social-media-links contact-sss">
                  <li>
                    <span>
                      <i class="bi bi-envelope"></i>
                    </span>
                    <a href="mailto:Info@pincept.de">Info@pincept.de</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
