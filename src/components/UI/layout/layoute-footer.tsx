import styles from "./layoute-footer.module.css";

const LayoutFooter = () => {
  return (
    <div className={styles.main_footer}>
      <div className={styles.footer_logo}>
        <img src="/main-logo.png" alt="logo" />
        <h3> DO.HEALTH</h3>
      </div>
      <ul className={styles.footer_menu}>
        <li> 로그인 </li>
        <li> 회원가입</li>
      </ul>
    </div>
  );
};

export default LayoutFooter;
