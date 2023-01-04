import styles from "./layout-header-for-mobile.module.css";
import { Link } from "react-router-dom";

const LayoutHeaderForM: React.FC<{ toggleModal: () => void }> = (props) => {
  const { toggleModal } = props;
  return (
    <div className={styles.main_header}>
      <Link to="/" className={styles.header_logo}>
        <img src="/main-logo.png" alt="logo" />
        <h3> DO.HEALTH</h3>
      </Link>
      <div className={styles.hamburger_button} onClick={toggleModal}>
        <img src="/icons8-hamburger-64.png" />
      </div>
    </div>
  );
};

export default LayoutHeaderForM;
