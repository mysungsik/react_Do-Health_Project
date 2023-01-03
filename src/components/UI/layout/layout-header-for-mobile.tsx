import styles from "./layout-header-for-mobile.module.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const LayoutHeaderForM = () => {
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
      <div className={styles.hamburger_button}>
        <img src="/icons8-hamburger-64.png" />
      </div>
    </div>
  );
};

export default LayoutHeaderForM;
