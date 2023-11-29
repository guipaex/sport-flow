import {useState, useEffect, createContext} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../services/firebase";
import { db } from "../services/firebase";
import { doc, getDoc, setDoc, addDoc, collection } from "firebase/firestore";

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
      const sessionUser = sessionStorage.getItem("@userID");
      const user = sessionUser;
      if(sessionToken && sessionUser){
        const userid = await getUserName(user)
        setSigned(true)
        setUser(userid)
      }
    
  }
async function createUser(user){
  console.log(user)
  function splitName(name) {
    const splitted = name.split(" ");
    return splitted;
  }

  const userData = {
    name: splitName(user.displayName)[0],
    lastName:splitName(user.displayName)[1],
    email: user.email,
  }
  console.log(userData)
  const newUser = await setDoc(doc(db, "users", user.uid), userData);
  }
  async function getUserName(uid){
      const userData = await getDoc(doc(db, "users", uid));
      const data = userData.data();
      if (data && data.username) {
        return data.username;
      } else{
        const userData = sessionStorage.getItem('@userData')
        createUser(JSON.parse(userData))
        return uid
      }
  }
	const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        sessionStorage.setItem("@AuthFirebase:token", token);
        sessionStorage.setItem("@userID", user.uid)
        sessionStorage.setItem("@userData", JSON.stringify(user))
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