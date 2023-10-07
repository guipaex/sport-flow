import React, { useState } from "react";
import style from "./styles.module.css";
import { db } from "../../services/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Race } from "../../utils/interfaces";

function RaceForm() {
  async function uploadRace(data: Race) {
    try {
      const race = await addDoc(collection(db, "races"), {
        name: data.raceName,
        date: data.raceDate,
        distances: data.distances,
        link: data.link,
      });
      console.log("Document written with ID: ", race.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const [name, setEventName] = useState<string>("");
  const [date, setDate] = useState<Date | any>("");
  const [distances, setDistances] = useState<string>("");
  const [local, setLocal] = useState<string>("");
  const [eventlink, setEventLink] = useState<string>("");

  function handleRace(e: React.FormEvent) {
    e.preventDefault();
    const raceData: Race = {
      raceName: name,
      raceDate: date,
      distances: filterDistances(distances),
      local: local,
      link: eventlink,
    };

    uploadRace(raceData);
  }

  function filterDistances(data) {
    let distances = data.split(",");
    return distances;
  }
  return (
    <form className={style.formulario} onSubmit={handleRace}>
      <input
        className={style.inputText}
        type='text'
        placeholder='Nome do Evento'
        value={name}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input className={style.inputDate} type='date' value={date} onChange={(e) => setDate(e.target.value)} />
      <input
        className={style.inputText}
        type='text'
        placeholder='Ex.: 5km, 10km, 21km'
        value={distances}
        onChange={(e) => setDistances(e.target.value)}
      />
      <input
        className={style.inputText}
        type='text'
        placeholder='Ex.: RJ'
        value={local}
        onChange={(e) => setLocal(e.target.value)}
      />
      <input
        type='text'
        className={style.inputText}
        placeholder='Endereço de Inscrição'
        value={eventlink}
        onChange={(e) => setEventLink(e.target.value)}
      />
      <input className={style.submitBTN} type='submit' value={"Cadastrar Prova"} />
    </form>
  );
}

export default RaceForm;
