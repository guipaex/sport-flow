import React, { useEffect, useState } from "react";
import style from "./styles.module.scss";
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import RaceThumb from "../RaceThumb";
import corridas from "../../utils/corridasRJ.json";
import RaceCard from "../RaceCard";

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
  corridas.forEach((corrida) => {
    console.log(corrida["event-title"]);
  });
  return (
    <section className={style.container}>
      <h1 className={style.title}>Corridas</h1>
      <div className={style.gallery}>
        {Object.values(corridas).map((evento) => {
          return <RaceCard />;
        })}
      </div>
    </section>
  );
};

export default RacesView;
