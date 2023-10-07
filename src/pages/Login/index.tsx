import { useContext, useEffect } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { User } from "firebase/auth";

export default function Login() {
  const { signInGoogle, signed, user }: any = useContext(AuthGoogleContext);

  let account: User = user;

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

  return <div>{user ? <h1>Olá, {account.displayName}!</h1> : <button onClick={loginGoogle}>Login</button>}</div>;
}
