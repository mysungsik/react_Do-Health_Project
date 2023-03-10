import styles from "./main-content-section3.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const MainContentSection3 = () => {
  return (
    <div className={styles.main_div}>
      <section className={styles.how_to_workout}>
        <div className={styles.how_to_workout_text}>
          <img
            src="/mainpage/icons8-chicken-64.png"
            style={{ width: "100px" }}
            alt={"logo"}
          />
          <img
            src="/mainpage/icons8-question-mark-100.png"
            alt={"question-mark"}
          />
          <p className={styles.how_to_workout_textP}>
            무엇을 먹을지 모르시겠다면
          </p>
          <h1 className={styles.how_to_workout_textH}>
            Do-Health <span>가 도와드리겠습니다</span>
          </h1>
          <div className={styles.how_to_workout_desc}>
            <p> 다이어트, 벌크업에 효과적인 식단 </p>
            <p>보여드릴테니, 선택하세요!</p>
            <p> 꼭 가져가야할 3대 영양소와, 비타민을 알려드립니다. </p>
            <p>
              그대로 따라오시면, <span>당신의 식단은 Healthy!</span>
            </p>
          </div>
        </div>
      </section>
      <section className={styles.how_to_workout_image_section}>
        <div className={styles.how_to_workout_text_div}>
          <div className={styles.how_to_workout_text_div_title}>
            <AnimationOnScroll animateIn="animate__fadeInLeft" duration={1.5}>
              <h1>식단 +</h1>
            </AnimationOnScroll>
          </div>
          <div className={styles.how_to_workout_text_div_desc}>
            <AnimationOnScroll
              animateIn="animate__fadeInLeftBig"
              duration={1.5}
            >
              <p>식단 고민이신가요?</p>
              <p>딱 좋은 식단을 추천해드립니다</p>
              <p>영양성분과 함께 표기해드립니다</p>
              <p>따라 해보세요!</p>
            </AnimationOnScroll>
          </div>
        </div>
        <div className={styles.how_to_workout_image_div}>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            className={styles.rightdown}
            duration={3}
          >
            <img src="/mainpage/do-eat.JPG" alt={"description"} />
          </AnimationOnScroll>
        </div>
      </section>
    </div>
  );
};

export default MainContentSection3;
