import styles from "./layout-header-for-mobile-modal.module.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const LayoutHeaderModalForM: React.FC<{ toggleModal: () => void }> = (
  props
) => {
  const [cookies, setCookie, removeCookie] = useCookies(["auth-cookie"]);
  const { toggleModal } = props;
  const history = useHistory();

  const logoutHandler = () => {
    removeCookie("auth-cookie");
    toggleModal();
    history.replace("/");
  };

  return (
    <div className={styles.main_header}>
      <div className={styles.logo_and_X}>
        <div>
          <Link to="/" className={styles.header_logo}>
            <img src="/main-logo.png" alt="logo" />
            <h3> DO.HEALTH</h3>
          </Link>
        </div>
        <div className={styles.header_X} onClick={toggleModal}>
          <img src="/mainpage/icons8-xbox-x-48.png" />
        </div>
      </div>
      <hr className="cross_line_gray_normal" />
      <ul className={styles.header_menu}>
        <Link to="/work-out">
          <li onClick={toggleModal}> 헬스 +</li>
        </Link>
        <Link to="/weight-loss">
          <li onClick={toggleModal}> 체중 -</li>
        </Link>
        <Link to="/find-foods">
          <li onClick={toggleModal}> 식단 +</li>
        </Link>

        {cookies["auth-cookie"] && (
          <Link to="/calendar">
            <li onClick={toggleModal}> 캘린더 + </li>
          </Link>
        )}
        <hr className="cross_line_gray_normal" />
        {!cookies["auth-cookie"] && (
          <Link to="/sign-up">
            <li onClick={toggleModal}> 회원가입</li>
          </Link>
        )}
        {!cookies["auth-cookie"] && (
          <Link to="/sign-in">
            <li onClick={toggleModal}> 로그인</li>
          </Link>
        )}
        {cookies["auth-cookie"] && <li onClick={logoutHandler}>로그아웃</li>}
      </ul>
    </div>
  );
};

export default LayoutHeaderModalForM;
