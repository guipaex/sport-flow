import style from "./header.module.scss";

export default function Header() {
  return (
    <header className={style.header}>
      <h2 className={style.logo}>BR Sports</h2>
    </header>
  );
}
