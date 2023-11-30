import { useParams } from "react-router-dom";
import style from "./profile.module.scss";
import React, { useEffect, useState, useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { db } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { query, collection, where, getDocs } from "firebase/firestore";
import userData from "../../utils/interfaces/userData";
import ProfileView from "./ProfileView";
import UserProfile from "./ProfilePanel";

export default function Profile() {
  const { user } = useContext<any>(AuthGoogleContext);
  const { username } = useParams();
  const [userData, setUserData] = useState<userData>();
  const [status, setStatus] = useState<string>("Loading...");

  async function getUserData(userRef) {
    const ref = query(collection(db, "users"), where("username", "==", userRef));
    const data = await getDocs(ref);
    if (data.docs.length === 1) {
      const result: userData = data.docs[0].data();
      setUserData(result);
      setStatus("OK");
    } else {
      setStatus("404");
      setUserData(undefined);
    }
  }

  useEffect(() => {
    getUserData(username);
  }, [user, username]);

  if (status === "404") {
    return (
      <main className={style.container}>
        <h1>Perfil de não encontrado</h1>
      </main>
    );
  } else if (status === "Loading...") {
    return (
      <main className={style.container}>
        <h1>Carregando...</h1>
      </main>
    );
  } else if (status === "OK") {
    return username === user ? <UserProfile data={userData} /> : <ProfileView data={userData} />;
  }
}
