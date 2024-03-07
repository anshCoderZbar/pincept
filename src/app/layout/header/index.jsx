import React, { useState } from "react";

import { BuildingIcon, MailIcon } from "app/icons";
import { OutlineHeartIcon, OverviewIcon } from "app/icons";

import logo from "assets/logo.svg";

import { ChangeLanguage } from "./ChangeLanguage";
import { Login, SignUp } from "app/auth";
import { MODAL_IDS } from "lib/constants/modal-ids";

export const Header = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <>
      <header>
        <div className="nav-main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <nav className="nav">
                  <a href="/#" className="brand">
                    <img src={logo} className="img-fluid" alt="logo" />
                  </a>
                  <div
                    className={`menu-container ${
                      navActive ? "mega-menu-show" : ""
                    }`}
                  >
                    <ul className="mega-menu">
                      <li className="dropdownn">
                        <div>
                          <a href="/#">
                            <OverviewIcon />
                            <span>Add Services</span>
                          </a>
                        </div>
                      </li>
                      <li className="dropdownn">
                        <div>
                          <a
                            href="/#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <OverviewIcon />
                            <span>Overview</span>
                          </a>
                          <ul className="dropdown-menu options_xss prof-drop">
                            <li>
                              <a href="/#" className="dropdown-item">
                                <i className="bi bi-person-fill"></i>Buyer
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="dropdown-item">
                                <i className="bi bi-person-fill"></i>Seller
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdownn">
                        <div>
                          <a href="/#">
                            <BuildingIcon />
                            <span>Orders</span>
                          </a>
                        </div>
                      </li>
                      <li className="dropdownn">
                        <div>
                          <a href="/#">
                            <MailIcon />
                            <span>Chat</span>
                          </a>
                        </div>
                      </li>
                      <li className="dropdownn ">
                        <div>
                          <a href="/#">
                            <OutlineHeartIcon />
                            <span>Whishlist</span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ss">
                    <li className="ki_s">
                      <a
                        href="/#"
                        className="language-toggle"
                        data-bs-toggle="modal"
                        data-bs-target={`#${MODAL_IDS.CHANGE_LANGUAGE}`}
                      >
                        <i className="bi bi-globe2"></i>
                      </a>
                    </li>

                    <li className="dropdownn wd-v">
                      <div>
                        <a
                          href="/#"
                          className="login-ss cxx"
                          data-bs-target={`#${MODAL_IDS.LOGIN_MODAL}`}
                          data-bs-toggle="modal"
                        >
                          login
                        </a>
                        <a
                          href="/#"
                          className="login-ss join-ss"
                          data-bs-target={`#${MODAL_IDS.SIGNUP_MODAL}`}
                          data-bs-toggle="modal"
                        >
                          Join
                        </a>
                        <span
                          href="/#"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <ul className="dropdown-menu options_xss prof-drop">
                            <li>
                              <a href="/#" className="dropdown-item">
                                <i className="bi bi-person-lines-fill"></i>My
                                Services
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="dropdown-item">
                                <i className="bi bi-person-circle"></i>My
                                Profile
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="dropdown-item">
                                <i className="bi bi-briefcase-fill"></i>Add
                                Portfolio
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="dropdown-item">
                                <i className="bi bi-bank"></i>Bank Details
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="dropdown-item">
                                <i className="bi bi-wallet-fill"></i>Earnings
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="dropdown-item">
                                <i className="bi bi-trash3"></i> Delete Account
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="dropdown-item">
                                <i className="bi bi-box-arrow-right"></i> Log
                                Out
                              </a>
                            </li>
                          </ul>
                          hello
                        </span>
                      </div>
                    </li>
                  </div>
                  <div className="buttons wxz_d">
                    <button
                      onClick={() => setNavActive(!navActive)}
                      className="menu-btn"
                    >
                      <span className="material-symbols-outlined">
                        {navActive ? (
                          <i className="bi bi-x"></i>
                        ) : (
                          <i className="bi bi-list"></i>
                        )}
                      </span>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <ChangeLanguage modalId={MODAL_IDS.CHANGE_LANGUAGE} />
      <Login modalId={MODAL_IDS.LOGIN_MODAL} />
      <SignUp modalId={MODAL_IDS.SIGNUP_MODAL} />
    </>
  );
};
