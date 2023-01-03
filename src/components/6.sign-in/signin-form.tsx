import styles from "./signin-form.module.css";
import { signinHandler } from "../../helper/signin-handler";
import { useRef, FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const SignInForm = () => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(["auth-cookie"]);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHanlder = async (e: FormEvent) => {
    e.preventDefault();
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;

    const responseData = await signinHandler(email, password);
    if (responseData.idToken) {
      setCookie("auth-cookie", {
        idToken: responseData.idToken,
        email: responseData.email,
      });
      history.replace("/");
    }
  };

  return (
    <div className={styles.main_div}>
      <form onSubmit={submitHanlder}>
        <div>
          <label> 이메일을 입력하세요</label>
          <input type={"email"} ref={emailRef} required />
        </div>
        <div>
          <label> 비밀번호를 입력하세요</label>
          <input type={"password"} ref={passwordRef} required />
        </div>
        <div>
          <button> 로그인</button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
