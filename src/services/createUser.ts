import userData from "../utils/interfaces/userData";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../services/firebase";

// const data:any = {
// 	apiKey : "AIzaSyB8jJ2yCSvqHeV6PfwhbeXRgxniO6KqbZA",
// 	appName : "[DEFAULT]",
// 	createdAt : "1696644790139",
// 	displayName : "Guilherme Paes",
// 	email: "guipaex@gmail.com",
// 	emailVerified : true,
// 	isAnonymous : false,
// 	lastLoginAt : "1701288173703",
// 	photoURL :  "https://lh3.googleusercontent.com/a/ACg8ocLnM_lc0szFd1j1OSBfUGQ4EkKGVGhcXBEwKHidVFG8sQ=s96-c",
// 	providerData : [{providerId: "google.com", uid: "104233259163594584700", displayName: "Guilherme Paes"}],
// 	stsTokenManager : {},
// 	uid :"xkoCUmEZcucuEYdA5KJLPQ5xyhL2",
// }
const defaultBanner = 'https://firebasestorage.googleapis.com/v0/b/streetrun-d889c.appspot.com/o/users%2Fdefault_banner.jpg?alt=media&token=7ed542b2-5d9b-4dc3-b7c4-d2e6ee981a87';

export default async function createUser(data:any) {
	const newUser:userData = {
		id: data.uid,
		name: splitName(data.displayName)[0],
		lastName: splitName(data.displayName)[1],
		displayName: data.displayName,
		username: data.uid,
		email: data.email,
		age: null,
		birth: null,
		images: {
			photoURL: data.photoURL,
			bannerURL: defaultBanner,
		},
		local: {
			city: null,
			state: null,
			country: 'Brasil'
		},
		role: 'user',
		records: {
			'5km' : null,
			'7.5km': null,
			'10km': null,
			'15km': null,
			'21km': null,
			'42km': null,
		},
		friends: [],
		events: []
	}

	const currentUser = await setDoc(doc(db, "users", data.uid), newUser);
	return await currentUser
}
function splitName(name) {
	const splitted = name.split(" ");
	return splitted;
}
