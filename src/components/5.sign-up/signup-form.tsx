import styles from "./signup-form.module.css";
import { signupHandler } from "../../helper/signup-handler";
import { useRef, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

const SignUpForm = () => {
  const history = useHistory();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");

  const submitHanlder = async (e: FormEvent) => {
    e.preventDefault();
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;

    const responseData = await signupHandler(email, password);

    if (responseData.idToken) {
      history.replace("/");
    } else if (responseData.error.message === "EMAIL_EXISTS") {
      setError("이미 존재하는 이메일 입니다.");
    } else if (
      responseData.error?.message ===
      "WEAK_PASSWORD : Password should be at least 6 characters"
    ) {
      setError("패스워드가 6자리 이하입니다.");
    }
  };
  return (
    <div className={styles.main_div}>
      <div>
        <h1> 회원가입</h1>
      </div>
      <div>
        <p> 회원가입을 하고, 캘린더를 사용해보세요 !</p>
        <p>캘린더에 여러분들의 하루 식단을 정리하고 </p>
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

export default SignUpForm;
