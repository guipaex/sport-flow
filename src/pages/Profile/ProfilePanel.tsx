import { Link } from "react-router-dom";
import { UserAuth } from "../../contexts/Auth";
import style from "./profile.module.scss";

export default function ProfileView() {
  const { user } = UserAuth();
  const master = user.role === "master";
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
      {master && <button>Criar Corrida</button>}
      <section className={style.contentColumns}>
        <section className={style.records}>
          <h4>Recordes:</h4>
          <button>Aualizar</button>
        </section>
        <section className={style.friendlist}>
          <h4>Amigos:</h4>
        </section>
        <section className={style.racesHistory}>
          <h4>Últimas Provas:</h4>
          <button>Adicionar</button>
          <Link to={`${user}/historico-corridas`}>Ver Historico completo</Link>
        </section>
      </section>
    </main>
  );
}
