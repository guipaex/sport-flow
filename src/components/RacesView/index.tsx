import React, { useEffect, useState } from "react";
import style from "./styles.module.scss";
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import RaceCard from "../RaceCard";
import { IRaceCardData } from "../../utils/interfaces";

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
    <section className={style.container}>
      <h1 className={style.title}>Corridas</h1>
      <div className={style.gallery}>
        {races === undefined
          ? ""
          : Object.values(races).map((race) => {
              return <RaceCard key={race.id} raceData={race} />;
            })}
      </div>
    </section>
  );
};

export default RacesView;
