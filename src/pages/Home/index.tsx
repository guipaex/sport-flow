import RacesView from "../../components/RacesView";
import style from "./styles.module.css";
import bannerImage from "../../assets/img/foto-banner.jpg";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { User } from "firebase/auth";

export default function Home() {
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
    <section className={style.container}>
      <header className={style.header}>
        <h2>Logo</h2>
        {user ? (
          <nav>
            <h4>Olá, {account.displayName}!</h4>
            <button>
              <Link className={style.registerBtn} to='/cadastro-corrida'>
                Cadastrar Evento
              </Link>
            </button>
          </nav>
        ) : (
          <nav>
            <button className={style.loginBtn} onClick={loginGoogle}>
              Log In com Google
            </button>
          </nav>
        )}
      </header>
      <div className={style.imgContainer}>
        <img className={style.img} src={bannerImage} alt='night run' />
      </div>
      <RacesView />
    </section>
  );
}
