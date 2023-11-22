import RacesView from "../../components/RacesView";
import style from "./styles.module.scss";

const sports = ["Corrida de Rua", "Natação", "Ciclismo", "Triatlo"];

export default function Home() {
  return (
    <section className={style.container}>
      <h1 className={style.title}>Sua Próxima prova está aqui!</h1>
      <RacesView />
    </section>
  );
}
