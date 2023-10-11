import React, { useState } from "react";
import style from "./styles.module.css";
import { db } from "../../services/firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { RaceData } from "../../utils/interfaces";

function RaceForm() {
  const [formData, setFormData] = useState({
    eventId: "",
    eventName: "",
    eventDate: "",
    distances: [],
    start: "",
    city: "",
    state: "",
    thumbURL: "",
    eventCover: "",
    eventPage: "",
    minimumPrice: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const raceData: RaceData = {
      eventId: uuidv4(),
      eventName: formData.eventName,
      eventDate: formData.eventDate,
      distances: filterDistances(formData.distances),
      location: {
        start: formData.start,
        city: formData.city,
        state: formData.state,
      },
      images: {
        thumbURL: formData.thumbURL,
        eventCover: formData.eventCover,
      },
      eventPage: formData.eventPage,
      minimunPrice: formData.minimumPrice,
    };
    uploadRace(raceData);
  };

  function filterDistances(data) {
    let distances = data.split(",");
    return distances;
  }

  async function uploadRace(data: any) {
    try {
      await setDoc(doc(db, "races", data.eventId), data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <form id='race-form' className={style.formulario} onSubmit={handleSubmit}>
      <label className={style.label} htmlFor='inputName'>
        Nome do Evento
      </label>
      <input
        type='text'
        name='eventName'
        className={style.inputText}
        placeholder='Nome do Evento'
        value={formData.eventName}
        onChange={handleChange}
      />

      <label className={style.label} htmlFor='inputName'>
        Cole a URL da imagem do evento:
      </label>
      <input
        type='text'
        name='thumbURL'
        className={style.inputText}
        placeholder='Nome do Evento'
        value={formData.thumbURL}
        onChange={handleChange}
      />

      <label className={style.label} htmlFor='inputName'>
        Data do Evento
      </label>
      <input
        type='date'
        name='eventDate'
        className={style.inputDate}
        value={formData.eventDate}
        onChange={handleChange}
      />
      <label className={style.label} htmlFor='inputName'>
        Distâncias
      </label>
      <input
        className={style.inputText}
        type='text'
        name='distances'
        placeholder='Ex.: 5km, 10km, 21km'
        value={formData.distances}
        onChange={handleChange}
      />
      <label className={style.label} htmlFor='inputName'>
        Local da Largada
      </label>
      <input
        className={style.inputText}
        type='text'
        name='start'
        placeholder='Ex.: Monumento dos Pracinhas'
        value={formData.start}
        onChange={handleChange}
      />
      <label className={style.label} htmlFor='inputName'>
        Cidade
      </label>
      <input
        className={style.inputText}
        type='text'
        name='city'
        placeholder='Ex.: Rio de Janeiro'
        value={formData.city}
        onChange={handleChange}
      />
      <label className={style.label} htmlFor='inputName'>
        Estado
      </label>
      <input
        className={style.inputText}
        type='text'
        name='state'
        placeholder='Ex.: RJ'
        value={formData.state}
        onChange={handleChange}
      />
      <label className={style.label} htmlFor='inputName'>
        Página do Evento
      </label>
      <input
        type='text'
        name='eventPage'
        className={style.inputText}
        placeholder='Página de Inscrição'
        value={formData.eventPage}
        onChange={handleChange}
      />
      <label className={style.label} htmlFor='inputName'>
        Quanto custa o Kit mais barato?
      </label>
      <input
        type='text'
        name='minimumPrice'
        className={style.inputText}
        placeholder='Página de Inscrição'
        value={formData.minimumPrice}
        onChange={handleChange}
      />
      <input className={style.submitBTN} type='submit' value={"Cadastrar Prova"} />
    </form>
    // <p>Codando... </p>
  );
}

export default RaceForm;
