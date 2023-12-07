import { Link } from "react-scroll";
import style from "./events.module.scss";
import { HiExternalLink } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useEffect, useState } from "react";

export default function EventPage() {
  const { id } = useParams();
  const [eventData, setEventData] = useState<any>(null);

  async function getEventData(eventRef) {
    const ref = doc(db, "races", eventRef);
    const data = await getDoc(ref);
    if (data.exists()) {
      const result = data.data();
      setEventData(await result);
    }
  }
  function handleExpiration(date): boolean {
    const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
    const today = new Date();
    let event = new Date();
    event.setDate(parseInt(date.split(" ")[0]));
    event.setMonth(months.indexOf(date.split(" ")[1]));
    event.setFullYear(parseInt(date.split(" ")[2]));

    if (today.getTime() > event.getTime()) {
      return false;
    } else {
      return true;
    }
  }
  useEffect(() => {
    getEventData(id);
  }, [id]);

  if (eventData) {
    return (
      <main className={style.container}>
        <img className={style.banner} src={eventData.images.eventCover} alt={`Capa do Evento ${eventData.eventName}`} />
        <h1 className={style.eventName}>{eventData.eventName}</h1>
        <nav className={style.nav}>
          <Link to='infos' smooth={true} className={style.nav_anchor}>
            Informações Gerais
          </Link>
          <Link to='kit' smooth={true} className={style.nav_anchor}>
            Kits
          </Link>
          <Link to='percursos' smooth={true} className={style.nav_anchor}>
            Percursos
          </Link>
          <Link to='participants' smooth={true} className={style.nav_anchor}>
            Participantes
          </Link>
        </nav>
        <a href={eventData.eventPage} className={style.button} target='_blank' rel='noreferrer'>
          <HiExternalLink className={style.button_icon} /> Se inscrever
        </a>
        <section id='main' className={style.section}>
          <h2 className={style.section_title}>Informações Gerais</h2>
          {handleExpiration(eventData.eventDate) ? (
            <h3 className={style.tag_active}>Inscrições Abertas</h3>
          ) : (
            <h3 className={style.tag_inactive}>Evento Encerrado</h3>
          )}
          <h3>Data:</h3>
          <p>31 DEZ 2023</p>
          <h3>Local</h3>
          <p>
            {eventData.location.start}, {eventData.location.city} - {eventData.location.state}
          </p>
          <h3>Distâncias</h3>
          <p>
            {eventData.distances.map((distance) => {
              return distance + "k ";
            })}
          </p>
          <h3>Retirada de Kits:</h3>
          <p>
            28 e 29/12 | de 10:00 até 20:00; 30/12 - de 10:00 às 18:00 Endereço: Prodigy Santos Dumont – Salão Corcovado
            – 3º andar Av. Alm. Silvio de Noronha, 365 - Centro
          </p>
          <h3>Inscrições:</h3>
          <p>As inscrições devem ser feitas até 29 de dezembro de 2023</p>
          <section className={style.orgCard}>
            organizado por:
            <div className={style.orgCard_head}>
              <img
                src='https://pbs.twimg.com/profile_images/1613598178468560902/RmDQJg73_400x400.jpg'
                className={style.orgCard_logo}
                alt='logo da O2 Corre'
              />
              <h3 className={style.orgCard_name}>O2 Corre</h3>
            </div>
            <a href='https://www.o2corre.com.br/' target='_blank' rel='noreferrer' className={style.orgCard_link}>
              www.o2corre.com.br
            </a>
          </section>
        </section>
        <section id='kit' className={style.section}>
          <h2 className={style.section_title}>Kits</h2>
        </section>
        <section id='percursos' className={style.section}>
          <h2 className={style.section_title}>Percursos</h2>
        </section>
        <section id='participants' className={style.section}>
          <h2 className={style.section_title}>Inscritos</h2>
          <ul className={style.particpantes}>
            {eventData.athletes?.map((user) => {
              return (
                <a key={user.id} href={`https://sportflow.com.bt/${user.userURL}`} target='_blank' rel='noreferrer'>
                  <div className={style.userCardMini}>
                    <img src={user.photo} alt='foto' />
                    <p>{user.name}</p> | <p>{user.distance}</p>
                  </div>
                </a>
              );
            })}
          </ul>
        </section>
      </main>
    );
  } else {
    return (
      <main className={style.container}>
        <h1>Carregando?</h1>
      </main>
    );
  }
}
