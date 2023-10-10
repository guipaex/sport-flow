import "./header.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { User } from "firebase/auth";

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
    <header>
      <h2>Logo</h2>
      {user ? (
        <nav>
          <h4>Olá, {account.displayName}!</h4>
          <button>
            <Link to='/cadastro-corrida'>Cadastrar Evento</Link>
          </button>
        </nav>
      ) : (
        <nav>
          <button onClick={loginGoogle}>Log In com Google</button>
        </nav>
      )}
    </header>
  );
}
