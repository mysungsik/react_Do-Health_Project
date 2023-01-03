import styles from "./layout-header-for-mobile-modal.module.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const LayoutHeaderModalForM = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["auth-cookie"]);
  const history = useHistory();

  const logoutHandler = () => {
    removeCookie("auth-cookie");
    history.replace("/");
  };

  return (
    <div className={styles.main_header}>
      <Link to="/" className={styles.header_logo}>
        <img src="/main-logo.png" alt="logo" />
        <h3> DO.HEALTH</h3>
      </Link>
      <hr className="cross_line_gray_normal" />
      <ul className={styles.header_menu}>
        <Link to="/work-out">
          <li> 헬스 +</li>
        </Link>
        <Link to="/weight-loss">
          <li> 체중 -</li>
        </Link>
        <Link to="/find-foods">
          <li> 식단 +</li>
        </Link>
        {!cookies["auth-cookie"] && (
          <Link to="/sign-up">
            <li> 회원가입</li>
          </Link>
        )}
        {!cookies["auth-cookie"] && (
          <Link to="/sign-in">
            <li> 로그인</li>
          </Link>
        )}
        {cookies["auth-cookie"] && (
          <Link to="/calenda">
            <li> 캘린더 + </li>
          </Link>
        )}
        <hr className="cross_line_gray_normal" />
        {cookies["auth-cookie"] && <li onClick={logoutHandler}> 로그아웃</li>}
      </ul>
    </div>
  );
};

export default LayoutHeaderModalForM;
