import styles from "./signup-form.module.css";
import { signupHandler } from "../../helper/signup-handler";
import { useRef, FormEvent } from "react";

const SignUpForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHanlder = async (e: FormEvent) => {
    e.preventDefault();
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;

    const responseData = await signupHandler(email, password);

    console.log(responseData);
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
          <button> 제출</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
