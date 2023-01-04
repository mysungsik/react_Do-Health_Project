import styles from "./main-content-section1.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const MainContentSection1 = () => {
  return (
    <div className={styles.main_div}>
      <section className={styles.how_to_workout}>
        <div className={styles.how_to_workout_text}>
          <img src="/main-logo.png" style={{ width: "130px" }} alt={"logo"} />
          <img
            src="/mainpage/icons8-question-mark-100.png"
            alt={"question-mark"}
          />
          <p className={styles.how_to_workout_textP}>
            운동 방법을 모르시겠다면
          </p>
          <h1 className={styles.how_to_workout_textH}>
            Do-Health <span>가 도와드리겠습니다</span>
          </h1>
          <div className={styles.how_to_workout_desc}>
            <p> 부위별 운동을 알려드립니다. </p>
            <p> 부위별 운동의 효과를 알려드립니다. </p>
            <p> 부위별 운동의 주의사항을 알려드립니다. </p>
            <p>
              그대로 따라오시면, <span>당신의 건강은 Healthy!</span>
            </p>
          </div>
        </div>
      </section>
      <section className={styles.how_to_workout_image_section}>
        <div className={styles.how_to_workout_text_div}>
          <div className={styles.how_to_workout_text_div_title}>
            <AnimationOnScroll animateIn="animate__fadeInLeft" duration={2}>
              <h1>헬스 +</h1>
            </AnimationOnScroll>
          </div>
          <div className={styles.how_to_workout_text_div_desc}>
            <AnimationOnScroll
              animateIn="animate__fadeInLeftBig"
              duration={1.5}
            >
              <p>운동 부위를 선택하세요</p>
              <p>적절한 운동을 선택하세요</p>
              <p>주의사항에 유의하세요</p>
              <p>직접 따라해보세요!</p>
            </AnimationOnScroll>
          </div>
        </div>
        <div className={styles.how_to_workout_image_div}>
          <AnimationOnScroll animateIn="animate__fadeInRight" duration={1.5}>
            <img src="/mainpage/do-parts.JPG" alt={"description"} />
          </AnimationOnScroll>
        </div>
      </section>
    </div>
  );
};

export default MainContentSection1;
