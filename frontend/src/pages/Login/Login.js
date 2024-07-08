import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import * as authService from "~/services/authService.js";

import { LogoIcon } from "~/components/Icons";
import styles from "./Login.module.scss";
const cx = classNames.bind(styles);

function Login() {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!isSubmit) return;

    const fetchApi = async () => {
      try {
        const result = await authService.login({
          username,
          password,
        });

        console.log(result);

        localStorage.setItem("user", result.data.user);

        setIsSubmit(false);
        navigate("/");
      } catch (err) {
        const data = await err.response.data;
        setIsSubmit(false);
        setMessage({
          type: "error",
          message: data.message,
        });
      }
    };

    fetchApi();
  }, [isSubmit]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("card")}>
        <h1 className={cx("title")}>
          <LogoIcon className={cx("logo")} />
          <span>TaskM</span>
        </h1>

        {message && <span className={cx(message.type)}>{message.message}</span>}

        <span className={cx("desc")}>Log in to continue</span>
        <input
          className={cx("input")}
          type="text"
          name="username"
          placeholder="username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className={cx("input")}
          type="password"
          name="username"
          placeholder="password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          disabled={isSubmit}
          className={cx("button")}
          type="click"
          onClick={() => {
            setIsSubmit(true);
          }}
        >
          Continue
        </button>

        <Link className={cx("link")} to="/register">
          Create an account
        </Link>
      </div>
    </div>
  );
}

export default Login;
