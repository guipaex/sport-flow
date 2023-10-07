import React, { useState } from "react";
import style from "./styles.module.css";
import { db } from "../../services/firebase";
import { collection, addDoc } from "firebase/firestore";

interface RaceProps {
  name: string;
  local: string;
  link: string;
}

function RaceForm() {
  async function test(race: RaceProps) {
    try {
      const prova = await addDoc(collection(db, "races"), {
        name: race.name,
        city: race.local,
        link: race.link,
      });
      console.log("Document written with ID: ", prova.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const [name, setEventName] = useState<string>("");
  const [local, setLocal] = useState<string>("");
  const [eventlink, setEventLink] = useState<string>("");

  function submitRace(e: React.FormEvent) {
    e.preventDefault();
    const dados = {
      name: name,
      local: local,
      link: eventlink,
    };
    test(dados);
  }

  return (
    <>
      <h1>Cadastrar Corrida</h1>
      <form className={style.formulario} onSubmit={submitRace}>
        <input type='text' placeholder='Nome da corrida' value={name} onChange={(e) => setEventName(e.target.value)} />
        <input type='text' placeholder='Cidade' value={local} onChange={(e) => setLocal(e.target.value)} />
        <input
          type='text'
          placeholder='link da corrida'
          value={eventlink}
          onChange={(e) => setEventLink(e.target.value)}
        />
        <input type='submit' />
      </form>
    </>
  );
}

export default RaceForm;
