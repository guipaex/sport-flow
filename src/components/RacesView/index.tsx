import React, { useEffect, useState } from "react";
import style from "./styles.module.css";
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import RaceThumb from "../RaceThumb";

const RacesView = () => {
  const [races, setRaces] = useState<Object>();

  const racesCollection = collection(db, "races");
  const getRaces = async () => {
    const data = await getDocs(racesCollection);
    setRaces(data.docs.map((item) => ({ ...item.data(), id: item.id })));
  };
  useEffect(() => {
    getRaces();
  }, []);
  return (
    <>
      <h1>Corridas</h1>
      <div className={style.races}>
        {races === undefined
          ? ""
          : Object.values(races).map((race) => {
              return (
                <div key={race.id} className={style.raceCard}>
                  <RaceThumb raceID={race.id} />
                  <h4 className={style.raceCard__title}>{race.name}</h4>
                  <div className={style.raceCard__infos}>
                    {Object.values(race.distances).map((distance, index) => (
                      <p className={style.raceCard__km} key={index}>
                        {String(distance)}Km
                      </p>
                    ))}
                  </div>
                  <a className={style.linkBtn} href={race.link} target='_blank'>
                    Saiba Mais
                  </a>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default RacesView;
