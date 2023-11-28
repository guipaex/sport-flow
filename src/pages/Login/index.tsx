import { LoginGoogle } from "../../components/buttons";
import style from "./login.module.scss";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";

export default function Login() {
  const { signInGoogle } = useContext<any>(AuthGoogleContext);
  return (
    <main className={style.container}>
      <form className={style.form}>
        <h1>Seja bem-vindo(a)!</h1>
        <p>Você pode entrar com sua conta do Google ou através de seu email e senha.</p>
        <LoginGoogle onClick={signInGoogle}>
          <FcGoogle />
        </LoginGoogle>
        <section className={style.inputGroup}>
          <label htmlFor='email' className={style.inputGroup__label}>
            Digite seu email
          </label>
          <input type='text' className={style.inputGroup__input} />
          <p>Error Placeholder</p>
        </section>
        <section className={style.inputGroup}>
          <label htmlFor='password' className={style.inputGroup__label}>
            Digite sua senha
          </label>
          <input id='password' type='password' className={style.inputGroup__input} />
          <p>Error Placeholder</p>
        </section>
        <input type='button' value='Entrar' />
      </form>
      <p>Não é cadastrado? </p>
      <button>Entrar com Google</button>
    </main>
  );
}
