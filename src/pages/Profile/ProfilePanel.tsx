import { Link } from "react-router-dom";
import style from "./profile.module.scss";
import userData from "../../utils/interfaces/userData";

interface Props {
  data: userData;
}

export default function ProfileView({ data }: Props) {
  const user = data;
  console.log(user);
  return (
    <main className={style.container}>
      <section className={style.intro}>
        <img className={style.intro__banner} src={user?.images?.bannerURL} alt='' />
        <img className={style.intro__photo} src={user?.images?.photoURL} alt='' />
        <span className={style.intro__text}>
          <h2 className={style.name}>{`${user.name} ${user.lastName}`}</h2>
          <p>{`${user?.age || "Idade"} | ${user?.local?.city || "Cidade"} - ${user?.local?.state || "Estado"}`}</p>
        </span>
      </section>
      <section className={style.contentColumns}>
        <section className={style.records}>
          <h4>Recordes:</h4>
          <h5>Corrida</h5>
          <p>5km: 27:00</p>
          <p>7,5km: 00:00</p>
          <p>10km: 1:30:00</p>
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
    </main>
  );
}
