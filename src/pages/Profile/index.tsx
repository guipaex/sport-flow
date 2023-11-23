import { Link, useParams } from "react-router-dom";
import style from "./profile.module.scss";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Profile() {
  const { uid } = useParams();
  const [user, setUser] = useState<any>({});

  async function getUserData() {
    const userData = await getDoc(doc(db, "users", uid));
    const data = userData.data();
    setUser(data);
  }
  useEffect(() => {
    getUserData();
  }, []);

  if (!user) {
    return (
      <main className={style.container}>
        <h1>Precisamos de mais alguns dados para criar seu perfil</h1>
        <Link to={`${user}/cadastro-perfil`}>Completar Cadastro</Link>
      </main>
    );
  } else {
    return (
      <main className={style.container}>
        <img className={style.banner} src={user.profileBanner} alt='' />
        <img className={style.profilePic} src={user.photoURL} alt='' />
        <h2 className={style.name}>{user.fullName}</h2>
        <p>{`${user.age} anos | ${user.location?.city} - ${user.location?.state}`}</p>
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
            <Link to={`${user}/historico-corridas`}>Ver Historico completo</Link>
          </section>
        </section>
        {user.adm && (
          <Link to='/cadastro-corrida' className={style.btn}>
            Criar Evento
          </Link>
        )}
      </main>
    );
  }
}
