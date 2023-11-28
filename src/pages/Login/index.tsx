import { LoginGoogle } from "../../components/buttons";
import style from "./login.module.scss";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";

export default function Login() {
  return <main className={style.container}></main>;
}
