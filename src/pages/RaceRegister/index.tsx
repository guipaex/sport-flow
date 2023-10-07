import React from "react";
import style from "./styles.module.css";

import RaceForm from "../../components/RaceForm";
export default function RaceRegister() {
  return (
    <section className={style.container}>
      <h1>CADASTRO DE EVENTO</h1>
      <RaceForm />
    </section>
  );
}
