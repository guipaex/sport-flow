import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';
import { auth } from '../services/firebase';
import { useContext, createContext, useEffect, useState } from 'react';
import { getUserData} from '../services/userServices';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
	const [user, setUser] = useState({});
	const [userURL, setUserURL] = useState();

	const logIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
	}
	const logOut = () => {
		signOut(auth)
		console.log('Deslogado')
	}
	
	useEffect (() => {
		const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
			if(currentUser){
				console.log("unsubscribe at Auth.js");
				const userData = await getUserData(currentUser.uid)
				setUser( await userData)
				setUserURL(await userData.username)
			}else{
				setUser(null)
			}
		});
		return () => {
      unsubscribe();
    };
	},[])
	return (
		<AuthContext.Provider value = {{logIn, logOut, user, userURL}}>
			{children}
		</AuthContext.Provider>
	)
}

export const UserAuth = () => {
	return useContext(AuthContext)
}