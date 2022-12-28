import styles from "./choose-parts.module.css";

// 가슴, 등, 이두 등의 버튼을 누르면, 리덕스 Store 에 State 를 전달
// 전달된 State 를 이용해,
// [2.how-to-workout Page ] 에 가서, 필요한 Description 렌더

const ChooseParts = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.main_title_text}>
        <p> Do-Parts + </p>
      </div>
      <div className={styles.select_parts_div}>
        <ul className={styles.select_parts}>
          <li>
            <div className={styles.parts_text}>
              <img src="/2.parts/torso.png" />
              <p>가슴</p>
            </div>
            <div className={styles.parts_img}>
              <img src="/2.parts/icons8-circled-right-100.png" />
            </div>
          </li>
          <li>
            <div className={styles.parts_text}>
              <img src="/2.parts/back.png" />
              <p>등</p>
            </div>
            <div className={styles.parts_img}>
              <img src="/2.parts/icons8-circled-right-100.png" />
            </div>
          </li>
          <li>
            <div className={styles.parts_text}>
              <img src="/2.parts/shoulders.png" />
              <p>어깨</p>
            </div>
            <div className={styles.parts_img}>
              <img src="/2.parts/icons8-circled-right-100.png" />
            </div>
          </li>
          <li>
            <div className={styles.parts_text}>
              <img src="/2.parts/biceps.png" />
              <p>이두</p>
            </div>
            <div className={styles.parts_img}>
              <img src="/2.parts/icons8-circled-right-100.png" />
            </div>
          </li>
          <li>
            <div className={styles.parts_text}>
              <img src="/2.parts/triceps.png" />
              <p>삼두</p>
            </div>
            <div className={styles.parts_img}>
              <img src="/2.parts/icons8-circled-right-100.png" />
            </div>
          </li>
          <li>
            <div className={styles.parts_text}>
              <img src="/2.parts/abs.png" />
              <p>복근</p>
            </div>
            <div className={styles.parts_img}>
              <img src="/2.parts/icons8-circled-right-100.png" />
            </div>
          </li>
          <li>
            <div className={styles.parts_text}>
              <img src="/2.parts/legs.png" />
              <p>하체</p>
            </div>
            <div className={styles.parts_img}>
              <img src="/2.parts/icons8-circled-right-100.png" />
            </div>
          </li>
          <li>
            <div className={styles.parts_text}>
              <img src="/2.parts/glutes.png" />
              <p>엉덩이</p>
            </div>
            <div className={styles.parts_img}>
              <img src="/2.parts/icons8-circled-right-100.png" />
            </div>
          </li>
        </ul>
        <div className={styles.description_div}>
          <p> 원하시는 부위를 선택하세요</p>
          <p> Do-Health 가 알려드립니다!</p>
        </div>
      </div>
    </div>
  );
};
export default ChooseParts;
