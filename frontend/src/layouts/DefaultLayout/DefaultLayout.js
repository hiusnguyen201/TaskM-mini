import className from "classnames/bind";

import Header from "~/layouts/components/Header";

import styles from "./DefaultLayout.module.scss";
const cx = className.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>{children}</div>
    </div>
  );
}

export default DefaultLayout;
