import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div>
      <div className={styles.main_div}>
        <section className={styles.main_title_text_section}>
          <div>
            <p className={styles.main_title_text_section_textP}>
              Do-Loss <span>-</span>
            </p>
            <p> 체중조절을 위한 가장 스마트한 선택</p>
            <p> 하루에 소모한 칼로리를 계산해보세요 </p>
            <p> 다이어트에 필요한 칼로리를 알려드립니다</p>
            <p> 당신의 체중은 Do-Health 와 함께</p>
            <p> Do-Loss Program</p>
          </div>
        </section>
        <section className={styles.main_title_img_section}>
          <img
            src="/3.loss-weight/pexels-andrea-piacquadio-3756042.jpg"
            alt="running"
          />
        </section>
      </div>
      <div className={`cross_line_green_thick ${styles.sub_description}`}>
        <img src="/3.loss-weight/icons8-fire-alt-100.png" alt="chicken" />
        함께 칼로리를 불태워볼까요?
      </div>
    </div>
  );
};

export default Intro;
