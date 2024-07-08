import className from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboard, faHome } from "@fortawesome/free-solid-svg-icons";

import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
const cx = className.bind(styles);

function Sidebar() {
  return (
    <div className={cx("wrapper")}>
      <nav className={cx("navbar")}>
        <ul className={cx("nav-list")}>
          <li>
            <Link className={cx("nav-item")} to={"/boards"}>
              <div className={cx("icon-wrapper")}>
                <FontAwesomeIcon icon={faChalkboard} />
              </div>
              <span className={cx("title")}>Boards</span>
            </Link>
          </li>

          <li>
            <Link className={cx("nav-item")} to={"/"}>
              <div className={cx("icon-wrapper")}>
                <FontAwesomeIcon icon={faHome} />
              </div>
              <span className={cx("title")}>Home</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={cx("seperate")}></div>
    </div>
  );
}

export default Sidebar;
