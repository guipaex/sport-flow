import React, { useState } from "react";
import style from "./styles.module.scss";
import { db } from "../../../services/firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { RaceData, Months } from "../../../utils/interfaces";

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
      eventDate: formatDate(formData.eventDate),
      distances: formatDistances(formData.distances),
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

  function formatDistances(data) {
    let distances = data.split(",");
    return distances;
  }

  const formatDate = (data) => {
    const dataValues = data.split("-");
    const month = parseInt(dataValues[1]);

    console.log(dataValues[2] + Months[month] + dataValues[0]);
    return `${dataValues[2]} ${Months[month]} ${dataValues[0]}`;
  };

  async function uploadRace(data: any) {
    try {
      await setDoc(doc(db, "races", data.eventId), data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <form id='race-form' className={style.form} onSubmit={handleSubmit}>
      <fieldset className={style.fieldset}>
        {/* NOME DO EVENTO */}
        <div className={style.inputGroup}>
          <input
            type='text'
            name='eventName'
            className={style.inputText}
            value={formData.eventName}
            onChange={handleChange}
            required
          />
          <label className={style.label} htmlFor='eventName'>
            Nome do Evento <span>*</span>
          </label>
        </div>
        {/* DATA DO EVENTO */}
        <div className={style.inputGroup}>
          <input required type='date' name='eventDate' value={formData.eventDate} onChange={handleChange} />
          <label className={style.label} htmlFor='eventDate'>
            Data do Evento <span>*</span>
          </label>
        </div>
        {/*KILOMETRAGENS*/}
        <div className={style.inputGroup}>
          <input required type='text' name='distances' value={formData.distances} onChange={handleChange} />
          <label className={style.label} htmlFor='distances'>
            Distâncias <span>*</span>
          </label>
        </div>
      </fieldset>

      <fieldset className={style.fieldset}>
        <div className={style.inputGroup}>
          <input className={style.inputText} type='text' name='start' value={formData.start} onChange={handleChange} />
          <label className={style.label} htmlFor='start'>
            Local da Largada
          </label>
        </div>
        <div className={style.inputGroup}>
          <input className={style.inputText} type='text' name='city' value={formData.city} onChange={handleChange} />
          <label className={style.label} htmlFor='city'>
            Cidade <span>*</span>
          </label>
        </div>
        <div className={style.inputGroup}>
          <input className={style.inputText} type='text' name='state' value={formData.state} onChange={handleChange} />
          <label className={style.label} htmlFor='sate'>
            Estado <span>*</span>
          </label>
        </div>
      </fieldset>
      <fieldset className={style.fieldset}>
        <div className={style.inputGroup}>
          <input type='text' name='eventPage' value={formData.eventPage} onChange={handleChange} />
          <label className={style.label} htmlFor='eventPage'>
            Página do Evento <span>*</span>
          </label>
        </div>
        <div className={style.inputGroup}>
          <input type='text' name='minimumPrice' value={formData.minimumPrice} onChange={handleChange} />
          <label className={style.label} htmlFor='minimumPrice'>
            Menor preço do Kit <span>*</span>
          </label>
        </div>
        <div className={style.inputGroup}>
          <input type='text' name='thumbURL' value={formData.thumbURL} onChange={handleChange} />
          <label className={style.label} htmlFor='thumbURL'>
            Link para imagem:
          </label>
        </div>
      </fieldset>
      <input className={style.submitBTN} type='submit' value={"Cadastrar Prova"} />
    </form>
  );
}

export default RaceForm;
