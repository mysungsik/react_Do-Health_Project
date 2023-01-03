import LayoutHeader from "./layout-header";
import LayoutHeaderForM from "./layout-header-for-mobile";
import LayoutFooter from "./layoute-footer";
import styles from "./layout.module.css";
import LayoutHeaderModalForM from "./layout-header-for-mobile-modal";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div>
      <div className={styles.desk}>
        <LayoutHeader />
      </div>
      <div className={styles.mobile}>
        <LayoutHeaderForM />
        <LayoutHeaderModalForM />
      </div>
      {props.children}
      <LayoutFooter />
    </div>
  );
};
export default Layout;
