import styles from "./1.choose-parts.module.css";

const ChooseParts = () => {
  return (
    <div className={styles.main_div}>
      <h1> 부위를 선택하세요 </h1>
      <ul>
        <li> 가슴</li>
        <li> 등</li>
        <li> 어깨</li>
        <li> 이두</li>
        <li> 삼두</li>
        <li> 복근</li>
        <li> 엉덩이</li>
        <li> 하체</li>
      </ul>
    </div>
  );
};
export default ChooseParts;
