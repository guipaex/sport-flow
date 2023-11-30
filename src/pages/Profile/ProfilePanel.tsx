import { Link } from "react-router-dom";
import style from "./profile.module.scss";
import userData from "../../utils/interfaces/userData";

interface Props {
  data: userData;
}

export default function ProfileView({ data }: Props) {
  // window.location.reload();
  const user = data;
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
        </section>
        <section className={style.friendlist}>
          <h4>Amigos:</h4>
        </section>
        <section className={style.racesHistory}>
          <h4>Últimas Provas:</h4>
          <Link to={`${user}/historico-corridas`}>Ver Historico completo</Link>
        </section>
      </section>
    </main>
  );
}
