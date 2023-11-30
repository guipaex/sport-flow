import { GrInstagram } from "react-icons/gr";
import style from "./about.module.scss";

export default function About() {
  return (
    <section className={style.container}>
      <h1 className={style.title}>A maior plataforma de esportes do Brasil!</h1>
      <div className={style.content}>
        <h2>Esse é o nosso objetivo!</h2>
        <p>
          E para chegar lá, estamos construindo uma plataforma completa para atletas de todas as modalidades, seja{" "}
          <strong>Corrida de Rua</strong>, <strong>Natação</strong>, <strong>Ciclismo</strong>, <strong>Triatlo</strong>{" "}
          e diversas outras modalidades.
        </p>
        <p>
          Siga-nos no Instagram e fique por dentro das atualizações
          <br />
          <a className={style.ig} href='https://www.instagram.com/sportflow.br/'>
            <GrInstagram className={style.ig__icon} /> @sportflow.br{" "}
          </a>
        </p>
      </div>
    </section>
  );
}
