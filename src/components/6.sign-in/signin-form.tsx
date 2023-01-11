import styles from "./signin-form.module.css";
import { signinHandler } from "../../helper/signin-handler";
import { useRef, FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const SignInForm = () => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(["auth-cookie"]);
  const [error, setError] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);


  const submitHanlder = async (e: FormEvent) => {
    e.preventDefault();
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    const responseData = await signinHandler(email, password);

    if (responseData.idToken) {
      // idToken 이 있다면 OK
      setCookie("auth-cookie", {
        idToken: responseData.idToken,
        email: responseData.email,
      });
      history.replace("/");
    } else if (responseData.error.message === "EMAIL_NOT_FOUND") {
      // 아니면 에러메시지
      setError("이메일을 잘못 입력하셨습니다.");
    } else if (responseData.error.message === "INVALID_PASSWORD") {
      // 아니면 에러메시지
      setError("패스워드를 잘못 입력하셨습니다.");
    }
  };

  return (
    <div className={styles.main_div}>
      <div>
        <h1> 로그인</h1>
      </div>
      <div>
        <p> 로그인을 하고, 캘린더를 사용해보세요 !</p>
        <p> 캘린더에 여러분들의 하루 식단을 정리하고 </p>
        <p> 잘 진행하고 있는지 확인해보세요 !</p>
      </div>
      <hr className="cross_line_green_thick" />
      <form onSubmit={submitHanlder} className={styles.signup_form}>
        {error && <p className={styles.error}> {error}</p>}
        <div>
          <label> 이메일을 입력해주세요</label>
          <input type={"email"} ref={emailRef} required />
        </div>
        <div>
          <label> 비밀번호를 입력해주세요</label>
          <input type={"password"} ref={passwordRef} required />
        </div>
        <div className={styles.button_div}>
          <button className="Just_Click_Button_Default"> 제출</button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
