import React, { useEffect, useState } from "react";
import style from "./styles.module.scss";
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import RaceCard from "../RaceCard";
import Loader from "../Loader";

const RacesView = () => {
  const [races, setRaces] = useState<Object>();

  const racesCollection = collection(db, "races");
  const getRaces = async () => {
    const data = await getDocs(racesCollection);
    setRaces(data.docs.map((item) => ({ ...item.data(), id: item.id })));
  };

  useEffect(() => {
    setTimeout(() => {
      // getRaces();
    }, 3000);
  }, []);
  return (
    <section className={style.container}>
      <h1 className={style.title}>Corridas</h1>
      <div className={style.gallery}>
        {races === undefined ? (
          <Loader />
        ) : (
          Object.values(races).map((race) => {
            return <RaceCard key={race.id} raceData={race} />;
          })
        )}
      </div>
    </section>
  );
};

export default RacesView;
