import RacesView from "../../components/RacesView";
import style from "./styles.module.scss";

export default function About() {
  return (
    <section className={style.container}>
      <div className={style.imgContainer}>
        <img
          className={style.banner}
          src='https://www.webrun.com.br/wp-content/uploads/2021/05/AdobeStock_292063777.jpeg'
          alt='Pessoa Correndo ao pôr do Sol'
        />
      </div>
      <RacesView />
    </section>
  );
}
