import RacesView from "../../components/RacesView";
import style from "./styles.module.css";
import bannerImage from "../../assets/img/foto-banner.jpg";

export default function Home() {
  return (
    <section className={style.container}>
      <header className={style.header}>
        <h2>Logo</h2>
        <nav>
          <button className={style.loginBtn}>Log In com Google</button>
        </nav>
      </header>
      <div className={style.imgContainer}>
        <img className={style.img} src={bannerImage} alt='night run' />
      </div>
      <RacesView />
    </section>
  );
}
