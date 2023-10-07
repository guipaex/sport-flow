import {useState, useEffect, createContext} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../services/firebase";

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({});

export const AuthGoogleProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null)
  const [signed, setSigned] = useState(false)

  useEffect(() => {
    loadStoreAuth()
    ;},[])

  function loadStoreAuth(){
    const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
    const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
    if(sessionToken && sessionUser){
      setSigned(true)
      setUser(JSON.parse(sessionUser))
    }
  }

	const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        sessionStorage.setItem("@AuthFirebase:token", token);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return(
    <AuthGoogleContext.Provider value={{signInGoogle, signed, user }}>{children}</AuthGoogleContext.Provider>

  );
};