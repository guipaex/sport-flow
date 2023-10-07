import React, { useEffect, useState } from "react";
import style from "./styles.module.css";
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";

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
              console.log(race[0]);
              return (
                <div key={race.id} className={style.raceCard}>
                  <h4>{race.name}</h4>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default RacesView;
