// default Imports
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// custom Imports
import { Modal } from "components/Modal";
import { Languages } from "mock/header";
import { BuildingIcon, MailIcon } from "app/icons";
import { OutlineHeartIcon, OverviewIcon } from "app/icons";

// images
import logo from "assets/logo.svg";
import loginSvg from "assets/login.svg";

export const Header = () => {
  const { i18n } = useTranslation();
  const [navActive, setNavActive] = useState(false);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <>
      <header>
        <div class="nav-main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <nav className="nav">
                  <a href="index.php" className="brand">
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
                          <a href="charts.php">
                            <OverviewIcon />
                            <span>Add Services</span>
                          </a>
                        </div>
                      </li>
                      <li className="dropdownn">
                        <div>
                          <a
                            href="charts.php"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <OverviewIcon />
                            <span>Overview</span>
                          </a>
                          <ul class="dropdown-menu options_xss prof-drop">
                            <li>
                              <a class="dropdown-item">
                                <i class="bi bi-person-fill"></i>Buyer
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item">
                                <i class="bi bi-person-fill"></i>Seller
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdownn">
                        <div>
                          <a href="current-project.php">
                            <BuildingIcon />
                            <span>Orders</span>
                          </a>
                        </div>
                      </li>
                      <li className="dropdownn">
                        <div>
                          <a href="chat/chat.php">
                            <MailIcon />
                            <span>Chat</span>
                          </a>
                        </div>
                      </li>
                      <li className="dropdownn ">
                        <div>
                          <a href="listing.php">
                            <OutlineHeartIcon />
                            <span>Whishlist</span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="ss">
                    <li class="ki_s">
                      <a
                        href="javascript:viod(0)"
                        class="language-toggle"
                        data-bs-toggle="modal"
                        data-bs-target="#modal1"
                      >
                        <i class="bi bi-globe2"></i>
                      </a>
                    </li>

                    <li class="dropdownn wd-v">
                      <div>
                        <a
                          href="javascript:viod(0)"
                          class="login-ss cxx"
                          // data-bs-target="#exampleModalToggle"
                          // data-bs-toggle="modal"
                        >
                          login
                        </a>
                        <a
                          href="javascript:viod(0)"
                          class="login-ss join-ss"
                          // data-bs-target="#exampleModalToggle9"
                          // data-bs-toggle="modal"
                        >
                          Join
                        </a>
                        <a
                          href=""
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <ul class="dropdown-menu options_xss prof-drop">
                            <li>
                              <a class="dropdown-item">
                                <i class="bi bi-person-lines-fill"></i>My
                                Services
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item">
                                <i class="bi bi-person-circle"></i>My Profile
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item">
                                <i class="bi bi-briefcase-fill"></i>Add
                                Portfolio
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item">
                                <i class="bi bi-bank"></i>Bank Details
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item">
                                <i class="bi bi-wallet-fill"></i>Earnings
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item">
                                <i class="bi bi-trash3"></i> Delete Account
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item">
                                <i class="bi bi-box-arrow-right"></i> Log Out
                              </a>
                            </li>
                          </ul>
                          hello
                        </a>
                      </div>
                    </li>
                  </div>
                  <div class="buttons wxz_d">
                    <button
                      onClick={() => setNavActive(!navActive)}
                      class="menu-btn"
                    >
                      <span class="material-symbols-outlined">
                        {navActive ? (
                          <i class="bi bi-x"></i>
                        ) : (
                          <i class="bi bi-list"></i>
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
      <Modal heading={"Select Language"} extra={"v_sz"} id="modal1">
        <div class="ct-topbar">
          <ul class="list-unstyled list-inline ct-topbar__list">
            <ul class="list-unstyled ct-language__dropdown">
              <li>
                <a
                  href="#googtrans(en|de)"
                  class="lang-es lang-select"
                  data-lang="de"
                >
                  German
                </a>
              </li>
              <li>
                <a
                  href="#googtrans(en|en)"
                  class="lang-en lang-select"
                  data-lang="en"
                >
                  English
                </a>
              </li>
              <li>
                <a
                  href="#googtrans(en|fr)"
                  class="lang-fr lang-select"
                  data-lang="fr"
                >
                  French
                </a>
              </li>
              <li>
                <a
                  href="#googtrans(en|zh-CN)"
                  class="lang-es lang-select"
                  data-lang="zh-CN"
                >
                  Chinese
                </a>
              </li>
              <li>
                <a
                  href="#googtrans(en|ja)"
                  class="lang-es lang-select"
                  data-lang="ja"
                >
                  Japanese
                </a>
              </li>
              <li>
                <a
                  href="#googtrans(en|hi)"
                  class="lang-hi lang-select"
                  data-lang="hi"
                >
                  Hindi
                </a>
              </li>
              <li>
                <a
                  href="#googtrans(en|el)"
                  class="lang-el lang-select"
                  data-lang="el"
                >
                  Greek
                </a>
              </li>
              <li>
                <a
                  href="#googtrans(en|id)"
                  class="lang-id lang-select"
                  data-lang="id"
                >
                  Indonesian
                </a>
              </li>
              <li>
                <a
                  href="#googtrans(en|it)"
                  class="lang-it lang-select"
                  data-lang="it"
                >
                  Italian
                </a>
              </li>
              <li>
                <a
                  href="#googtrans(en|ar)"
                  class="lang-ar lang-select"
                  data-lang="ar"
                >
                  Arabic
                </a>
              </li>
              <li>
                <a
                  href="#googtrans(en|ru)"
                  class="lang-ru lang-select"
                  data-lang="ru"
                >
                  Russian
                </a>
              </li>
              <li>
                <a
                  href="#googtrans(en|ur)"
                  class="lang-ur lang-select"
                  data-lang="ur"
                >
                  Urdu
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </Modal>
    </>
  );
};
