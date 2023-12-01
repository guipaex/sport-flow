import React, { useEffect, useState } from "react";
import style from "./profile.module.scss";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { query, collection, where, getDocs } from "firebase/firestore";
import userData from "../../utils/interfaces/userData";
import ProfileView from "./ProfileView";
import UserProfile from "./ProfilePanel";
import { UserAuth } from "../../contexts/Auth";

export default function Profile() {
  const { user, userURL } = UserAuth();
  const { username } = useParams();
  const [status, setStatus] = useState<string>("Loading...");
  const [profileData, setProfileData] = useState<userData>();

  async function getUserData(userRef) {
    const ref = query(collection(db, "users"), where("username", "==", userRef));
    const data = await getDocs(ref);
    if (data.docs.length === 1) {
      const result: userData = data.docs[0].data();
      setProfileData(result);
      setStatus("OK");
    } else {
      setStatus("404");
    }
  }

  useEffect(() => {
    getUserData(username);
  }, [username]);

  if (status === "404") {
    return (
      <main className={style.container}>
        <h1>Perfil não encontrado</h1>
      </main>
    );
  } else if (status === "Loading...") {
    return (
      <main className={style.container}>
        <h1>Carregando...</h1>
      </main>
    );
  } else if (status === "OK") {
    return username === userURL ? <UserProfile /> : <ProfileView data={profileData} />;
  }
}
