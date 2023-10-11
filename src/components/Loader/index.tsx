import style from "./loader.module.scss";

export default function Loader() {
  return (
    <div className={style.loader}>
      <p className={style.fixed}>Carregando</p>
      <div className={style.words}>
        <span className={style.word}>corridas</span>
        <span className={style.word}>distâncias</span>
        <span className={style.word}>datas</span>
        <span className={style.word}>valores</span>
        <span className={style.word}>corridas</span>
      </div>
    </div>
  );
}
