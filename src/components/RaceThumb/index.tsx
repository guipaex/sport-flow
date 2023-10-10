import style from "./imgThumb.css";
export default function RaceThumb(raceTHUMB: any) {
  const imgURL = Object.values(raceTHUMB)[0] as string;
  // const mockupIMG_URL ="https://cdn.ticketagora.com.br/ticketagora/images/A7LYTPWTT456K4NLD2GR78O17T6K34DL4VWNRE7QXE0X2ZPC4G.png";
  return <img src={imgURL} className={style.imgThumb} />;
}
