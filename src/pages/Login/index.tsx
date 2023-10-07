import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { User } from "firebase/auth";

export default function Login() {
  const { signInGoogle, signed, user }: any = useContext(AuthGoogleContext);

  async function loginGoogle() {
    await signInGoogle();
  }

  if (!signed) {
    return <button onClick={loginGoogle}>Entrar com Google</button>;
  } else {
    let account: User = user;
    return <h1>Olá, {account.displayName}!</h1>;
  }
}
