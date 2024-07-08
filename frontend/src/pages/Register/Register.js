import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import * as authService from "~/services/authService.js";

import { LogoIcon } from "~/components/Icons";
import styles from "./Register.module.scss";
const cx = classNames.bind(styles);

function Register() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  useEffect(() => {
    if (!isSubmit) return;

    const fetchApi = async () => {
      try {
        const result = await authService.register({
          username,
          password,
          confirmPassword,
        });

        setUsername("");
        setPassword("");
        setConfirmPassword("");

        usernameRef.current.value = "";
        passwordRef.current.value = "";
        confirmPasswordRef.current.value = "";

        setMessage({
          type: "success",
          message: "Sign up success",
        });
      } catch (err) {
        console.log(err);
        const data = err.response.data;
        setMessage({
          type: "error",
          message: data.message,
        });
      }

      setIsSubmit(false);
    };

    fetchApi();
  }, [isSubmit]);

  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>
        <LogoIcon className={cx("logo")} />
        <span>TaskM</span>
      </h1>

      {message && <span className={cx(message.type)}>{message.message}</span>}

      <span className={cx("desc")}>Sign up to continue</span>
      <input
        ref={usernameRef}
        className={cx("input")}
        type="text"
        placeholder="username..."
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        ref={passwordRef}
        className={cx("input")}
        type="password"
        placeholder="password..."
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        ref={confirmPasswordRef}
        className={cx("input")}
        type="password"
        placeholder="confirm password..."
        onChange={(e) => {
          setConfirmPassword(e.target.value);
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
        Submit
      </button>

      <Link className={cx("link")} to="/login">
        Already have an account? Log in
      </Link>
    </div>
  );
}

export default Register;
