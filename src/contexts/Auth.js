import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from '../services/firebase';
import { useContext, createContext, useEffect, useState } from 'react';
import createUser from '../services/createUser';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
	const [user, setUser] = useState({});
	const [username, setUsername] = useState();

	const logIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
	}
	const logOut = () => {
		signOut(auth)
	}
	useEffect (() => {
		console.log('entrou')
		const logout = onAuthStateChanged(auth, async (currentUser) => {
			setUser(currentUser)
			if(currentUser){
				getUserName(currentUser)
			}
		});
		return () => {
			logout()
		}
	})


async function getUserName(user){
	const userData = await getDoc(doc(db, "users", user.uid));
	const data = userData.data();
	console.log(data)
		if (data && data.username) {
			setUsername(data.username)
			 ;
		} else{
				createUser(user)
			return user.uid
		}
	}

	return (
		<AuthContext.Provider value = {{logIn, logOut, user, username}}>
			{children}
		</AuthContext.Provider>
	)
}

export const UserAuth = () => {
	return useContext(AuthContext)
}