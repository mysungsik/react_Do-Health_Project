import styles from "./main-content-section2.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const MainContentSection1 = () => {
  return (
    <div className={styles.main_div}>
      <section className={styles.how_to_workout}>
        <div className={styles.how_to_workout_text}>
          <img
            src="/mainpage/icons8-body-85.png"
            style={{ width: "100px" }}
            alt={"logo"}
          />
          <img
            src="/mainpage/icons8-question-mark-100.png"
            alt={"question-mark"}
          />
          <p className={styles.how_to_workout_textP}>
            체중 조절이 걱정이시라면
          </p>
          <h1 className={styles.how_to_workout_textH}>
            Do-Health <span>가 도와드리겠습니다</span>
          </h1>
          <div className={styles.how_to_workout_desc}>
            <p> 운동별 칼로리 소모를 알려드립니다. </p>
            <p> 고객님의 정보를 바탕으로, 기초 대사량을 알려드립니다. </p>
            <p> 체중이 빠지는데 필요한 적절한 열량을 알려드립니다. </p>
            <p>
              그대로 따라오시면, <span>당신의 체중은 Healthy!</span>
            </p>
          </div>
        </div>
      </section>
      <section className={styles.how_to_workout_image_section}>
        <div className={styles.how_to_workout_text_div}>
          <div className={styles.how_to_workout_text_div_title}>
            <AnimationOnScroll animateIn="animate__fadeInLeft" duration={2}>
              <h1>체중 -</h1>
            </AnimationOnScroll>
          </div>
          <div className={styles.how_to_workout_text_div_desc}>
            <AnimationOnScroll animateIn="animate__fadeIn" duration={2}>
              <p>AMR 을 계산해드립니다</p>
              <p>칼로리를 입력해주세요</p>
              <p>더 필요한 열량소모를 알려드립니다</p>
              <p>추가적인 운동방법을 알려드립니다</p>
            </AnimationOnScroll>
          </div>
        </div>
        <div className={styles.how_to_workout_image_div}>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={1}>
            <img src="/mainpage/do-loss.JPG" alt={"description"} />
          </AnimationOnScroll>
        </div>
      </section>
    </div>
  );
};

export default MainContentSection1;
