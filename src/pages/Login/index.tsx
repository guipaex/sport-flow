import style from "./login.module.scss";
import LoginForm from "../../components/Form/Login/Login";

export default function Login() {
  return (
    <main className={style.container}>
      <LoginForm />
    </main>
  );
}
