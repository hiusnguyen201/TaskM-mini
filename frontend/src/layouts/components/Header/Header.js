import className from "classnames/bind";

import styles from "./Header.module.scss";
const cx = className.bind(styles);

function Header() {
  return <div className={cx("wrapper")}>Day la Header</div>;
}

export default Header;
