import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";

export default function Login() {
  const { signInGoogle, signed, user }: any = useContext(AuthGoogleContext);

  async function loginGoogle() {
    await signInGoogle();
  }

  if (!signed) {
    return <button onClick={loginGoogle}>Entrar com Google</button>;
  } else {
    let username = user.displayName;
    return <h1>Olá, {username}!</h1>;
  }
}
