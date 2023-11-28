import { useContext } from "react";
import { AuthGoogleContext } from "../../../contexts/authGoogle";

export default function LoginForm() {
  const { signInGoogle } = useContext<any>(AuthGoogleContext);
  return (
    <form>
      <h1>Seja bem-vindo(a)!</h1>
      <p>Você pode entrar com sua conta do Google ou através de seu email e senha.</p>
      <section>
        <label htmlFor='email'>Digite seu email</label>
        <input type='text' />
        <p>Error Placeholder</p>
      </section>
      <section>
        <label htmlFor='password'>Digite sua senha</label>
        <input id='password' type='password' />
        <p>Error Placeholder</p>
      </section>
      <input type='button' value='Entrar' />
    </form>
  );
}
