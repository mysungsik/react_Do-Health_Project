import styles from "./Intro.module.css";

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
        <button className="White_Button"> 헬스 방법 알아보기 + </button>
        <button className="Blue_Button"> 체중 줄여보기 - </button>
        <button className="White_Button"> 식단 알아보기 - </button>
      </section>
    </div>
  );
};

export default Intro;
