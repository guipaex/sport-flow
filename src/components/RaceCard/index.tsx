import style from "./raceCard.module.scss";
import { FaRegCalendar } from "react-icons/fa";
import { PiSneakerMoveBold } from "react-icons/pi";

enum Months {
  JAN = 1,
  FEV,
  MAR,
  ABR,
  MAI,
  JUN,
  JUL,
  AGO,
  SET,
  OUT,
  NOV,
  DEZ,
}
export default function RaceCard(raceData: any) {
  const data = raceData.raceData;
  let eventDistances = [];
  data.distances.forEach((element) => {
    eventDistances.push(element.replace("km", ""));
  });

  // const formatedData = () => {
  //   const dataValues = data.date.split("-");
  //   const formatedMoth = parseInt(dataValues[1]);

  //   return `${dataValues[2]} ${Months[formatedMoth]} ${dataValues[0]}`;
  // };

  const getThumbURL = () => {
    const imageAdress = data.images;
    if (imageAdress === undefined || imageAdress === null) {
      return "";
    } else {
      return Object.values(imageAdress).join().replace(/\,/, "");
    }
  };

  return (
    <a className={style.raceCard} href={data.eventPage}>
      <p className={style.sport}>
        <PiSneakerMoveBold className={style.sport__icon} />
      </p>
      <img src={getThumbURL()} className={style.eventThumb} alt='Capa do Evento' />
      <h4 className={style.date}>
        <FaRegCalendar /> {data.eventDate}
      </h4>
      <h2 className={style.title}>{data.eventName}</h2>
      <ul className={style.distance}>
        {eventDistances.map((distance) => (
          <li key={distance} className={style.distance__tag}>
            {distance} km
          </li>
        ))}
      </ul>
      <span className={style.moreInfo}>
        <p className={style.local}>
          {data.city} - {data.state}
        </p>
        <p className={style.priceTag}>
          A partir de <span className={style.priceTag__value}>{data.minimunPrice}</span>
        </p>
      </span>
    </a>
  );
}
