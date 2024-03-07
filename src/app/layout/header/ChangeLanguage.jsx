import React from "react";

import { Modal } from "components/Modal";

export const ChangeLanguage = ({ modalId }) => {
  return (
    <Modal heading={"Select Language"} headClass={"v_sz"} id={modalId}>
      <div className="ct-topbar">
        <ul className="list-unstyled list-inline ct-topbar__list">
          <ul className="list-unstyled ct-language__dropdown">
            <li>
              <a
                href="#googtrans(en|de)"
                className="lang-es lang-select"
                data-lang="de"
              >
                German
              </a>
            </li>
            <li>
              <a
                href="#googtrans(en|en)"
                className="lang-en lang-select"
                data-lang="en"
              >
                English
              </a>
            </li>
            <li>
              <a
                href="#googtrans(en|fr)"
                className="lang-fr lang-select"
                data-lang="fr"
              >
                French
              </a>
            </li>
            <li>
              <a
                href="#googtrans(en|zh-CN)"
                className="lang-es lang-select"
                data-lang="zh-CN"
              >
                Chinese
              </a>
            </li>
            <li>
              <a
                href="#googtrans(en|ja)"
                className="lang-es lang-select"
                data-lang="ja"
              >
                Japanese
              </a>
            </li>
            <li>
              <a
                href="#googtrans(en|hi)"
                className="lang-hi lang-select"
                data-lang="hi"
              >
                Hindi
              </a>
            </li>
            <li>
              <a
                href="#googtrans(en|el)"
                className="lang-el lang-select"
                data-lang="el"
              >
                Greek
              </a>
            </li>
            <li>
              <a
                href="#googtrans(en|id)"
                className="lang-id lang-select"
                data-lang="id"
              >
                Indonesian
              </a>
            </li>
            <li>
              <a
                href="#googtrans(en|it)"
                className="lang-it lang-select"
                data-lang="it"
              >
                Italian
              </a>
            </li>
            <li>
              <a
                href="#googtrans(en|ar)"
                className="lang-ar lang-select"
                data-lang="ar"
              >
                Arabic
              </a>
            </li>
            <li>
              <a
                href="#googtrans(en|ru)"
                className="lang-ru lang-select"
                data-lang="ru"
              >
                Russian
              </a>
            </li>
            <li>
              <a
                href="#googtrans(en|ur)"
                className="lang-ur lang-select"
                data-lang="ur"
              >
                Urdu
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </Modal>
  );
};
