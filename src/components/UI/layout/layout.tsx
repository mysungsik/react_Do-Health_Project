import LayoutHeader from "./layout-header";
import LayoutFooter from "./layoute-footer";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div>
      <LayoutHeader />
      {props.children}
      <LayoutFooter />
    </div>
  );
};
export default Layout;
