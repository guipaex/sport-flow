import {EventData} from "../utils/interfaces/eventData";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase";


export async function createEvent(data:any) {
	const newEvent:EventData = {
		id: data.uid,
  	name: data.name, 
		type: data.type, //Corrida de Rua, Natação, Ciclismo, Triatlo...
  	description: data.description,
		page: data.page, //Link para pagina de inscrição 
		minimunPrice: getMinimun(data.kits), // Aqui vamos executar uma função pra mapear o menor preço na propriedade KIT
  	dates: {
			eventDate: data.eventDate, //Data da Corrida
			kit: data.kitDate, // Retirada do Kit
			// limit: data.limitDate // Limite pra Inscrição
		},
  	// routes: //Precisa criar uma função que retorne um Array com objetos pra cada distancia [{
		// 	distance: , // 5k, 10k, 7.5k...
		// 	map: string //Link para o Mapa do Percurso
		// }]
		
  location: {
		// kit: string,
    start: data.localStart,
    city: data.localCity,
    state: data.localState,
  },
	org : {
		id: data.orgID,
		name: data.orgName,
		logo: data.orgLogo,

	},
  img: {
    thumb: "string", //Miniatura do Evento
    cover: "string", //Banner do Evento pra página do evento
  },
	kits: [{
		name: "string",
		price: "string",
		img: "string",
		description: "string"
	}]
}
}

function getMinimun(kits) {
	const lowerValue = kits.split(" ");
	return lowerValue;
}

// export async function getUserData(id){
// 	const userData = await getDoc(doc(db, "users", id));
// 	const data = userData.data();
// 	if ( data ) {
// 			return data
// 		} else{
// 			return await createUser(data)
// 		}
// 	}