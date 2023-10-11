import style from "./raceCard.module.scss";
import { IRaceCardData } from "../../utils/interfaces";
import { FaRegCalendar } from "react-icons/fa";
import { PiSneakerMoveBold } from "react-icons/pi";

// enum Months {
//   JAN = "01",
//   FEV  = "02" ,
//   MAR  = "03",
//   ABR  = "04",
//   MAI  = "05",
//   JUN  = "06",
//   JUL  = "07",
//   AGO  = "08",
//   SET  = "09",
//   OUT  = "10",
//   NOV  = "11",
//   DEZ  = "12",
// }

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
  let distances = [];
  data.distances.forEach((element) => {
    distances.push(element.replace("km", ""));
  });

  const formatedData = () => {
    const dataValues = data.date.split("-");
    const formatedMoth = parseInt(dataValues[1]);

    return `${dataValues[2]} ${Months[formatedMoth]} ${dataValues[0]}`;
  };

  return (
    <a className={style.raceCard} href={data.link}>
      <p className={style.sport}>
        <PiSneakerMoveBold className={style.sport__icon} />
      </p>
      <img src={data.imgURL} className={style.eventThumb} alt='Capa do Evento' />
      <h4 className={style.date}>
        <FaRegCalendar /> {formatedData()}
      </h4>
      <h2 className={style.title}>{data.name}</h2>
      <ul className={style.distance}>
        {distances.map((distance) => (
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
          A partir de <span className={style.priceTag__value}>{data.value}</span>
        </p>
      </span>
    </a>
  );
}
