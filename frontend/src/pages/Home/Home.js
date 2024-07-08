import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import styles from "./Home.module.scss";
const cx = classNames.bind(styles);

function Home() {
  return <div className={cx("wrapper")}>Content</div>;
}

export default Home;
