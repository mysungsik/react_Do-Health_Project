import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.main_title_text}>
        <p className={styles.main_title_textP}>
          Do-Loss <span>-</span>
        </p>
        <p> 체중조절을 위한 가장 똑똑한 선택</p>
        <p> Do-Loss Program</p>
      </div>
      <div className={styles.main_title_img}>
        <img
          src="/3.loss-weight/tyler-nix-Y1drF0Y3Oe0-unsplash.jpg"
          alt="running"
        />
      </div>
      <div className={styles.main_description}>
        <p> 당신의 기초대사량을 구해드립니다.</p>
        <p> 활동량에 따른 칼로리 소모량을 알려드립니다.</p>
        <p>감량을 위해 얼마나 먹어야 하는지,</p>
        <p> 얼마나 운동해야 하는지 정해드립니다.</p>
        <p> Do-Health 와 함께 당신의 체중을 줄여보세요</p>
      </div>
      <hr className={styles.cross_line_green} />
      <hr className={styles.cross_line_green} />
    </div>
  );
};

export default Intro;
