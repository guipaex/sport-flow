import style from "./header.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { User } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

export default function Header() {
  const { signInGoogle, user }: any = useContext(AuthGoogleContext);
  const account: User = user;
  function loginGoogle() {
    signInGoogle();
    setInterval(() => {
      const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
      if (!sessionUser) {
        console.log(sessionUser);
      } else {
        window.location.reload();
      }
    }, 500);
  }
  return (
    <header className={style.header}>
      <h2 className={style.logo}>SportSync</h2>
      {user ? (
        <nav className={style.menu}>
          <div className={style.profile}>
            <img src={account.photoURL} className={style.profile__pic} />
            <p className={style.profile__saudation}>Olá, {account.displayName}!</p>
          </div>
          <Link className={style.btn__addEvent} to='/cadastro-corrida'>
            Cadastrar Evento
          </Link>
        </nav>
      ) : (
        <nav className={style.menu}>
          <button className={style.btn__login} onClick={loginGoogle}>
            <FcGoogle className={style.btn__icon} /> Entrar
          </button>
        </nav>
      )}
    </header>
  );
}
