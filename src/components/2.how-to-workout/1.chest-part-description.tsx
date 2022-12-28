import DesCard from "../UI/descriptionCard/DesCard";
import styles from "./0.all-parts-description.module.css";

const ChestPartDes = () => {
  return (
    <div className={styles.main_div}>
      <DesCard
        name={"벤치프레스"}
        img={"/2.parts/do-parts/graham-mansfield-rkBkXqlfRRo-unsplash.jpg"}
        des={[
          { id: 1, text: "팔꿈치와 명치 사이의 수직 각도" },
          { id: 2, text: "충분한 허리의 아치각도 유지하기" },
        ]}
        warn={[
          { id: 1, text: "팔꿈치와 명치 사이의 수직 각도" },
          { id: 2, text: "충분한 허리의 아치각도 유지하기" },
        ]}
      />
      <hr className={styles.cross_orange_line} />
      <hr className={styles.cross_orange_line} />
      <DesCard
        name={"체스트 프레스"}
        img={"/2.parts/do-parts/graham-mansfield-rkBkXqlfRRo-unsplash.jpg"}
        des={[
          { id: 1, text: "팔꿈치와 명치 사이의 수직 각도" },
          { id: 2, text: "충분한 허리의 아치각도 유지하기" },
        ]}
        warn={[
          { id: 1, text: "팔꿈치와 명치 사이의 수직 각도" },
          { id: 2, text: "충분한 허리의 아치각도 유지하기" },
        ]}
      />
    </div>
  );
};

export default ChestPartDes;
