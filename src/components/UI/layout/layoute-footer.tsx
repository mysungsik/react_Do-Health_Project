import styles from "./layoute-footer.module.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const LayoutFooter = () => {
  const [cookies] = useCookies(["auth-cookie"]);

  const isLogedIn = !!cookies["auth-cookie"];
  return (
    <div className={styles.main_footer}>
      <div className={styles.footer_logo}>
        <h3> DO.HEALTH</h3>
      </div>
      <ul className={styles.footer_menu}>
        <ul className={styles.footer_menu_content}>
          <h3> 컨텐츠</h3>
          <li>
            <Link to={"/work-out"}> 헬스 + </Link>
          </li>
          <li>
            <Link to={"/weight-loss"}> 체중 - </Link>
          </li>
          <li>
            <Link to={"/find-foods"}> 식단 + </Link>
          </li>
          {isLogedIn && (
            <li>
              <Link to={"/calendar"}> 캘린더 + </Link>
            </li>
          )}
        </ul>
        <ul className={styles.footer_menu_user}>
          <h3> 회원</h3>
          {!isLogedIn && (
            <li>
              <Link to={"/sign-in"}> 로그인 </Link>
            </li>
          )}
          {!isLogedIn && (
            <li>
              <Link to={"/sign-up"}> 회원가입 </Link>
            </li>
          )}
          {isLogedIn && <li>로그아웃</li>}
        </ul>
        <ul className={styles.footer_menu_info}>
          <h3> 정보</h3>
          <li>
            <a href="mailto:audtlr93@naver.com">문의하기</a>
          </li>
          <li> audtlr93@naver.com</li>
          <li> 카피라잇</li>
        </ul>
      </ul>
    </div>
  );
};

export default LayoutFooter;
