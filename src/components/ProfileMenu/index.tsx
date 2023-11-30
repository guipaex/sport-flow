import { Link } from "react-router-dom";
import { UserAuth } from "../../contexts/Auth";
import style from "./profilemenu.module.scss";
import { MdOutlineLogout } from "react-icons/md";
import classNames from "classnames";

export default function ProfileMenu() {
  const { user, logOut, username } = UserAuth();

  return (
    <section className={classNames(style.menu)}>
      <Link to={`/${username}`} className={style.profile}>
        <img src={user.photoURL} className={style.profile__picture} />
        <span className={style.profile__name}>{user.displayName}</span>
      </Link>
      <button onClick={logOut} className={style.logout}>
        <MdOutlineLogout className={style.logout__icon} />
      </button>
    </section>
  );
}
