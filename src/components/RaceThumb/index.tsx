export default function RaceThumb(raceID: any) {
  console.log(raceID);
  const mockupIMG_URL =
    "https://cdn.ticketagora.com.br/ticketagora/images/A7LYTPWTT456K4NLD2GR78O17T6K34DL4VWNRE7QXE0X2ZPC4G.png";

  return <img src={mockupIMG_URL} />;
}
