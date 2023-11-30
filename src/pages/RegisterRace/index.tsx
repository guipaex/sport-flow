import style from "./styles.module.scss";
import RaceForm from "../../components/Form/RaceForm";
import { UserAuth } from "../../contexts/Auth";

export default function RaceRegister() {
  const { user } = UserAuth();

  return (
    <section className={style.container}>
      <h1>CADASTRO DE EVENTO</h1>
      {!user ? (
        <>
          <h2>Área restrita para usuários cadastrados</h2>;
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4iZCrmSeGj-IfJXZbMdLXlvH4ES-rra4Q5g&usqp=CAU'
            alt=''
          />
        </>
      ) : (
        <h1>Colocar o Formulario aqui</h1>
      )}
    </section>
  );
}
