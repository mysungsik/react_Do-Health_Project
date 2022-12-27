import styles from "./layout-header.module.css";

const LayoutHeader = () => {
  return (
    <div className={styles.main_header}>
      <div className={styles.header_logo}>
        <img src="/main-logo.png" alt="logo" />
        <h3> DO.HEALTH</h3>
      </div>
      <ul className={styles.header_menu}>
        <li> 로그인 </li>
        <li> 회원가입</li>
      </ul>
    </div>
  );
};

export default LayoutHeader;
