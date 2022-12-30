import styles from "./Intro.module.css";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div>
      <section>
        <video autoPlay className={styles.video_div} muted loop>
          <source src="/mainpage/main-video.mp4" type="video/mp4"></source>
        </video>
      </section>
      <section className={styles.main_Intro}>
        <p className={styles.main_Intro_textP}>
          건강함을 지키는 단 하나의 법칙
        </p>
        <h1 className={styles.main_Intro_textH}>
          <span>당장 </span>Do-Health
        </h1>
      </section>
      <section className={styles.main_Intro_buttons}>
        <button className="White_Button">
          <Link to={"/work-out"}>헬스 방법 알아보기 + </Link>
        </button>

        <button className="Blue_Button">
          <Link to={"/weight-loss"}>체중 줄여보기 -</Link>
        </button>
        <button className="White_Button">
          <Link to={"/find-foods"}>식단 알아보기 -</Link>
        </button>
      </section>
    </div>
  );
};

export default Intro;
