import className from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import { LogoIcon } from "~/components/Icons";
const cx = className.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <a href="/" className={cx("logo")}>
        <LogoIcon />
        TaskM
      </a>
      <Link
        onClick={() => {
          localStorage.removeItem("user");
        }}
        className={cx("logout")}
        to={"/login"}
      >
        Logout
      </Link>
    </div>
  );
}

export default Header;
