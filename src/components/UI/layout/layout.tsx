import LayoutHeader from "./layout-header";
import LayoutHeaderForM from "./layout-header-for-mobile";
import LayoutFooter from "./layoute-footer";
import styles from "./layout.module.css";
import LayoutHeaderModalForM from "./layout-header-for-mobile-modal";
import { useState } from "react";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  let showStyle;

  if (showModal) {
    showStyle = styles.show;
  }
  if (!showModal) {
    showStyle = styles.hide;
  }

  return (
    <div>
      <div className={styles.desk}>
        <LayoutHeader />
      </div>
      <div className={styles.mobile}>
        <LayoutHeaderForM toggleModal={toggleModal} />
        <div className={showStyle}>
          <LayoutHeaderModalForM toggleModal={toggleModal} />
        </div>
      </div>
      {props.children}
      <LayoutFooter />
    </div>
  );
};
export default Layout;
