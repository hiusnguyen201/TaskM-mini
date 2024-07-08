import className from "classnames/bind";

import Header from "~/layouts/components/Header";

import styles from "./DefaultLayout.module.scss";
import Sidebar from "../components/Sidebar";
const cx = className.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div style={{ height: "2000px" }} className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
