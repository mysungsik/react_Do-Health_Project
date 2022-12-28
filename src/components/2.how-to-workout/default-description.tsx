import styles from "./default-description.module.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const DefaultDes = () => {
  return (
    <div className={styles.main_div}>
      {/* 첫번째 설명칸 시작 */}

      <div className={styles.des_intro}>
        <div className={styles.des_intro_text}>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <div className={styles.des_intro_textH}>
              <h4> Do-parts+ 소개 ...</h4>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <div className={styles.des_intro_textP}>
              <p> 설명설명설명...</p>
              <p> 설명설명설명...</p>
              <p> 설명설명설명...</p>
              <p> 설명설명설명...</p>
              <p> 설명설명설명...</p>
            </div>
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <div className={styles.des_intro_img}>
            <img src="/2.parts/do-parts/graham-mansfield-rkBkXqlfRRo-unsplash.jpg"></img>
          </div>
        </AnimationOnScroll>
      </div>

      {/* 두번째 설명칸 시작 */}

      <div className={styles.des_main}>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <div className={styles.des_main_img}>
            <img src="/2.parts/do-parts/graham-mansfield-rkBkXqlfRRo-unsplash.jpg"></img>
          </div>
        </AnimationOnScroll>
        <div className={styles.des_main_text}>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <div className={styles.des_main_textH}>
              <h4> Do-parts+ 소개 ...</h4>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <div className={styles.des_main_textP}>
              <p> 설명설명설명...</p>
              <p> 설명설명설명...</p>
              <p> 설명설명설명...</p>
              <p> 설명설명설명...</p>
              <p> 설명설명설명...</p>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};
export default DefaultDes;
