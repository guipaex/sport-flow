import style from "./raceCard.module.scss";
import { IRaceCardData } from "../../utils/interfaces";
import { FaRegCalendar } from "react-icons/fa";
import { PiSneakerMoveBold } from "react-icons/pi";

export default function RaceCard(data: IRaceCardData) {
  const eventPage =
    "https://www.ticketsports.com.br/e/circuito-rei-e-rainha-do-+A2:G3mar-2023-35381?termo=&periodo=0&mes=0&inicio=&fim=&ordenacao=";
  const eventThumb =
    "https://cdn.ticketagora.com.br/ticketagora/images/thumb/EED9DQ5HLEBS0VO3C9HLQ1JXDD7DPEEWMNGR47N3LMMC3L42SK.png";
  return (
    <a className={style.raceCard} href={eventPage}>
      <p className={style.sport}>
        <PiSneakerMoveBold className={style.sport__icon} />
      </p>
      <img src={eventThumb} className={style.eventThumb} alt='Capa do Evento' />
      <h4 className={style.date}>
        <FaRegCalendar /> 29 NOV 2023
      </h4>
      <h2 className={style.title}>CIRCUITO REI E RAINHA DO MAR 2023</h2>
      <ul className={style.distance}>
        <li className={style.distance__tag}>5 km</li>
        <li className={style.distance__tag}>10 km</li>
        <li className={style.distance__tag}>21 km</li>
        <li className={style.distance__tag}>42 km</li>
      </ul>
      <span className={style.moreInfo}>
        <p className={style.local}>Sorocaba SP</p>
        <p className={style.priceTag}>
          A partir de <span className={style.priceTag__value}>R$ 175,60</span>
        </p>
      </span>
    </a>
  );
}
