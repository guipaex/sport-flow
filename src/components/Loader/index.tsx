import style from "./loader.module.scss";

export default function Loader() {
  return (
    <div className={style.raceCard}>
      <div className={style.sport}></div>
      <div className={style.eventThumb} />
      <div className={style.date} />
      <div className={style.title} />
      <div className={style.distance} />
      <span className={style.moreInfo}>
        <p className={style.local}></p>
        <p className={style.priceTag}></p>
      </span>
    </div>
  );
}
