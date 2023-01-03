import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div>
      <div className={styles.main_div}>
        <section className={styles.main_title_text_section}>
          <div>
            <p className={styles.main_title_text_section_textP}>
              Do-Eat <span>+</span>
            </p>
            <p> 식단은 운동, 혹은 그 이상으로 중요한 요소중 하나입니다</p>
            <p> 벌크업과 린매스업, 다이어트에 필요한 식단을 알려드립니다.</p>
            <p> 당신의 목적과 함께</p>
            <p> Do-Eat + Program</p>
          </div>
        </section>
        <section className={styles.main_title_img_section}>
          <img
            src="/4.foods/elena-koycheva-faqm2syfUIE-unsplash.jpg"
            alt="eat"
          />
        </section>
      </div>
      <div className={`cross_line_purple_thick ${styles.sub_description}`}>
        <img src="/mainpage/icons8-chicken-64.png" alt="chicken" />
        당신에게 알맞는 음식을 선택하세요
      </div>
    </div>
  );
};

export default Intro;
