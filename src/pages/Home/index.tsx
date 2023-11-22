import RacesView from "../../components/RacesView";
import style from "./styles.module.scss";

export default function Home() {
  return (
    <section className={style.container}>
      <h1 className={style.title}>Sua Próxima prova está aqui!</h1>
      <RacesView />
    </section>
  );
}
