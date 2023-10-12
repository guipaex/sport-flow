import style from "./raceCard.module.scss";
import { FaRegCalendar } from "react-icons/fa";
import { PiSneakerMoveBold } from "react-icons/pi";

export default function RaceCard(raceData: any) {
  const data = raceData.raceData;
  let eventDistances = [];
  data.distances.forEach((element) => {
    eventDistances.push(element.replace("km", ""));
  });

  const getThumbURL = () => {
    const imageAdress = data.images;
    if (imageAdress === undefined || imageAdress === null) {
      return "";
    } else {
      return Object.values(imageAdress).join().replace(/,/, "");
    }
  };

  const getLocation = (param) => {
    const location = data.location;

    if (location === undefined || location === null) {
      return "";
    } else {
      switch (param) {
        case "start":
          return location.start;
        case "city":
          return location.city;
        case "state":
          return location.state;
      }
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
          {getLocation("city")} - {getLocation("state")}
        </p>
        <p className={style.priceTag}>
          A partir de <span className={style.priceTag__value}>{data.minimunPrice}</span>
        </p>
      </span>
    </a>
  );
}
