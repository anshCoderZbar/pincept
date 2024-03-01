import React from "react";

import { Modal } from "components/Modal";

export const ChangeLanguage = ({ modalId }) => {
  return (
    <Modal heading={"Select Language"} extra={"v_sz"} id={modalId}>
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
  );
};
