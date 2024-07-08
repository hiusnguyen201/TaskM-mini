import className from "classnames/bind";

import styles from "./AuthLayout.module.scss";
const cx = className.bind(styles);

function AuthLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("card")}>{children}</div>
    </div>
  );
}

export default AuthLayout;
