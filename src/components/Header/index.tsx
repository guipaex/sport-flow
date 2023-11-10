import React from "react";
import style from "./header.module.scss";
import logo from "../../assets/svg/logo_light.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { PiListBold, PiXBold } from "react-icons/pi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Bloqueia o scroll
    } else {
      document.body.style.overflow = "auto"; // Restaura o scroll
    }
    return () => {
      document.body.style.overflow = "auto"; // Certifique-se de restaurar o scroll ao desmontar o componente
    };
  }, [isOpen]);

  return (
    <header className={style.header}>
      <Link to='/' onClick={() => setIsOpen(false)}>
        <img src={logo} className={style.logo} alt='Logo Sports Flow' />
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
            <Link className={style.menu__item} to='about' onClick={() => setIsOpen(!isOpen)}>
              Sobre
            </Link>
          </li>
          <li>
            <Link className={style.menu__item} to='projects' onClick={() => setIsOpen(!isOpen)}>
              Corridas
            </Link>
          </li>
          <li>
            <Link className={style.menu__item} to='contact' onClick={() => setIsOpen(!isOpen)}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
