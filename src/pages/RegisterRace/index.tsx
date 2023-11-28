import { useContext } from "react";
import style from "./styles.module.scss";
import RaceForm from "../../components/Form/RaceRegister";
import { AuthGoogleContext } from "../../contexts/authGoogle";

export default function RaceRegister() {
  const { signed }: any = useContext(AuthGoogleContext);

  return (
    <section className={style.container}>
      <h1>CADASTRO DE EVENTO</h1>
      {!signed ? (
        <>
          <h2>Área restrita para usuários cadastrados</h2>;
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4iZCrmSeGj-IfJXZbMdLXlvH4ES-rra4Q5g&usqp=CAU'
            alt=''
          />
        </>
      ) : (
        <RaceForm />
      )}
    </section>
  );
}
