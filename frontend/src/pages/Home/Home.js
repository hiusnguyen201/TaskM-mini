import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import styles from "./Home.module.scss";
const cx = classNames.bind(styles);

function Home() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  if (!user) {
    navigate("/login");
  }

  return <div className={cx("wrapper")}>ascsa</div>;
}

export default Home;
