import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <h1>{t("hello world")}</h1>
    </>
  );
}