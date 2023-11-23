import React, { useContext } from "react";
import style from "./header.module.scss";
import logo from "../../assets/svg/logo_light.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { PiListBold, PiXBold } from "react-icons/pi";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { db } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUserName] = useState("");
  const { signInGoogle, signed, user } = useContext<any>(AuthGoogleContext);

  async function getUserName(uid) {
    const userData = await getDoc(doc(db, "users", uid));
    const data = userData.data();
    setUserName(data.username);
  }

  useEffect(() => {
    if (signed) {
      getUserName(user.uid);
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, signed]);

  return (
    <header className={style.header}>
      <Link to='/' onClick={() => setIsOpen(false)} className={style.logo}>
        <img src={logo} alt='Logo Sport Flow' />
      </Link>
      <input type='text' placeholder='Procurar...' className={style.search} />
      <nav className={style.menu}>
        <button className={style.menuButton} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <PiXBold className={style.menuButton__close} /> : <PiListBold className={style.menuButton__open} />}
        </button>
        <ul
          className={classNames({
            [style.menu__links]: true,
            [style["menu__links--open"]]: isOpen,
            [style["menu__links--closed"]]: !isOpen,
          })}
        >
          <li>
            <Link className={style.menu__item} to='sobre' onClick={() => setIsOpen(!isOpen)}>
              Sobre
            </Link>
          </li>
          <li>
            <Link className={style.menu__item} to='contato' onClick={() => setIsOpen(!isOpen)}>
              Contato
            </Link>
          </li>
          {!signed ? (
            <button className={style.menu__loginBtn} onClick={signInGoogle}>
              Entrar
            </button>
          ) : (
            <li>
              <Link to={`/perfil/${username}`} className={style.menu__item} onClick={() => setIsOpen(!isOpen)}>
                Seu Perfil
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
