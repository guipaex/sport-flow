import { Link, useParams } from "react-router-dom";
import style from "./profile.module.scss";
import React, { useEffect, useState, useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { db } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import ProfileView from "./ProfileView";

export default function Profile() {
  const { user } = useContext<any>(AuthGoogleContext);
  const { username } = useParams();
  const [userData, setUserData] = useState<any>();
  const [status, setStatus] = useState(false);

  async function getUserData() {
    const ref = doc(db, "users", user);
    const data = await getDoc(ref);
    if (data.exists()) {
      console.log(data.data());
    } else {
      setUserData(undefined);
      setStatus(false);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return <ProfileView user={username} />;
}
