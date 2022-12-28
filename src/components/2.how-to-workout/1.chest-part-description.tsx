import DesCard from "../UI/descriptionCard/DesCard";
import styles from "./0.all-parts-description.module.css";

const ChestPartDes = () => {
  return (
    <div className={styles.main_div}>
      <DesCard
        name={"벤치프레스"}
        img={"/2.parts/do-parts/graham-mansfield-rkBkXqlfRRo-unsplash.jpg"}
        des={["조심", "또조심"]}
        warn={["조심조심,", "도솜"]}
      />
    </div>
  );
};

export default ChestPartDes;
