import React, { useState, useContext } from "react";
import style from "./styles.module.css";
import { db } from "../../services/firebase";
import { collection, addDoc } from "firebase/firestore";
import { IRaceCardData } from "../../utils/interfaces";
import { AuthGoogleContext } from "../../contexts/authGoogle";

function RaceForm() {
  const [status, setStatus] = useState<boolean>();
  const [name, setEventName] = useState<string>("");
  const [date, setDate] = useState<Date | any>("");
  const [distances, setDistances] = useState<string>("");
  const [local, setLocal] = useState<string>("");
  const [eventlink, setEventLink] = useState<string>("");

  async function uploadRace(data: IRaceCardData) {
    try {
      addDoc(collection(db, "races"), {
        // name: data.raceName,
        // date: data.raceDate,
        // distances: data.distances,
        // link: data.link,
      });
      setStatus(false);
      if (!status) {
        resetForm();
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  function handleRace(e: React.FormEvent) {
    e.preventDefault();
    setStatus(true);
    // const raceData: Race = {
    //   raceName: name,
    //   raceDate: date,
    //   distances: filterDistances(distances),
    //   local: local,
    //   link: eventlink,
    // };
    // uploadRace(raceData);
  }

  function filterDistances(data) {
    let distances = data.split(",");
    return distances;
  }
  function resetForm() {
    setStatus(undefined);
    setEventName("");
    setDate("");
    setDistances("");
    setLocal("");
    setEventLink("");
  }

  const { signed }: any = useContext(AuthGoogleContext);

  if (!signed) {
    console.log(signed);
    return (
      <>
        <h2>Área restrita para usuários cadastrados</h2>;
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4iZCrmSeGj-IfJXZbMdLXlvH4ES-rra4Q5g&usqp=CAU'
          alt=''
        />
      </>
    );
  } else {
    return (
      <form id='race-form' className={style.formulario} onSubmit={handleRace}>
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
}

export default RaceForm;
