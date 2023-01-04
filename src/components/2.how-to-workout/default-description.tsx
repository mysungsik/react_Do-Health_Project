import styles from "./default-description.module.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const DefaultDes = () => {
  return (
    <div className={styles.main_div}>
      {/* 첫번째 설명칸 시작 */}

      <div className={styles.des_intro}>
        <div className={styles.des_intro_text}>
          <AnimationOnScroll animateIn="animate__fadeIn">
            <div className={styles.des_intro_textH}>
              <h4> Do-parts+ 에서는</h4>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <div className={styles.des_intro_textP}>
              <p> 원하시는 운동부위가 있으신가요?</p>
              <p> 운동은 하고싶은데 운동 명칭을 모르시겠나요?</p>
              <p> 어떤 운동이 나에게 적합한지 모르시겠나요? </p>
              <p> 파트를 선택하세요! Do-Parts 가 알려드립니다 !</p>
            </div>
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <div className={styles.des_intro_img}>
            <img src="/2.parts/do-parts/graham-mansfield-rkBkXqlfRRo-unsplash.jpg"></img>
          </div>
        </AnimationOnScroll>
      </div>

      {/* 두번째 설명칸 시작 */}

      <div className={styles.des_main}>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <div className={styles.des_main_img}>
            <img src="/2.parts/do-parts/john-arano-h4i9G-de7Po-unsplash.jpg"></img>
          </div>
        </AnimationOnScroll>
        <div className={styles.des_main_text}>
          <AnimationOnScroll animateIn="animate__fadeIn">
            <div className={styles.des_main_textH}>
              <h4> 원하는 파트를 선택하세요 !</h4>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <div className={styles.des_main_textP}>
              <p> 설명을 보고 가장 적합한 운동을 골라보세요</p>
              <p> 더 깊은 설명은 검색을 통해 !</p>
              <p> 운동 명칭만 알아도 검색하는데는 문제없습니다!</p>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};
export default DefaultDes;
