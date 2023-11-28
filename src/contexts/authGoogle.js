import {useState, useEffect, createContext} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../services/firebase";
import { db } from "../services/firebase";
import { doc, getDoc  } from "firebase/firestore";

const provider = new GoogleAuthProvider();
export const AuthGoogleContext = createContext({});

export const AuthGoogleProvider = ({ children }) => {
  const auth = getAuth(app);
  const [signed, setSigned] = useState(false)
  const [user, setUser] = useState("");
  
  useEffect(() => {
    loadAuthData()
    ;},[])
    
    async function loadAuthData(){
      const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
      const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
      const user = sessionUser;
      if(sessionToken && sessionUser){
        const userid = await getUserName(user)
        setSigned(true)
        setUser(userid)
        
      }
    
  }
  async function getUserName(uid){
      const userData = await getDoc(doc(db, "users", uid));
      const data = userData.data();
      if (data && data.username) {
        return data.username;
      } else {
        return uid
      }
  }
	const signInGoogle = () => {
    console.log('chamou')
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        sessionStorage.setItem("@AuthFirebase:token", token);
        sessionStorage.setItem("@AuthFirebase:user", user.uid)
        window.location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return(
    <AuthGoogleContext.Provider value={{signInGoogle, signed, user}}>{children}</AuthGoogleContext.Provider>

  );
};