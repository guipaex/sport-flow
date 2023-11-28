import { Link } from "react-router-dom";
import style from "./profile.module.scss";
import React, { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { query, collection, where, getDocs } from "firebase/firestore";

export default function ProfileView({ user }: any) {
  const [userData, setUserData] = useState<any>(undefined);

  async function getUserData() {
    const ref = query(collection(db, "users"), where("username", "==", user));
    const data = await getDocs(ref);
    if (data.docs) {
      setUserData(data.docs[0].data());
    } else {
      console.log("Nenhum documento encontrado");
      setUserData(undefined);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  if (userData === undefined) {
    return (
      <main className={style.container}>
        <h1>Carregando...</h1>
      </main>
    );
  } else {
    return (
      <main className={style.container}>
        <section className={style.intro}>
          <img className={style.intro__banner} src={userData?.profileBanner} alt='' />
          <img className={style.intro__photo} src={userData?.photoURL} alt='' />
          <span className={style.intro__text}>
            <h2 className={style.name}>{userData?.fullName}</h2>
            <p>{`${userData?.age} anos | ${userData?.location?.city} - ${userData?.location?.state}`}</p>
          </span>
        </section>
        <section className={style.contentColumns}>
          <section className={style.records}>
            <h4>Recordes:</h4>
            <h5>Corrida</h5>
            <p>5km: 27:00</p>
            <p>7,5km: 00:00</p>
            <p>10km: 00:00</p>
            <p>15km: 00:00</p>
            <p>21km: 00:00</p>
            <p>42km: 00:00</p>
          </section>
          <section className={style.friendlist}>
            <h4>Amigos:</h4>
            <p>Ninicolino</p>
          </section>
          <section className={style.racesHistory}>
            <h4>Últimas Provas:</h4>
            <p>Night Run - Etapa 2 - Counter Attack</p>
            <Link to={`${userData}/historico-corridas`}>Ver Historico completo</Link>
          </section>
        </section>
      </main>
    );
  }
}
