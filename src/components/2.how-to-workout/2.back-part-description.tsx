import DesCard from "../UI/descriptionCard/DesCard";
import styles from "./0.all-parts-description.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

//       <hr className={styles.cross_orange_line} />   오렌지라인 그리기
const BackPartDes = () => {

  const exerciseData = useSelector(
    (state: RootState) => state.exercise.exerciseData
  );
  const filterdData = exerciseData.filter((item) => item.part === "back");

  return (
    <div className={styles.main_div}>
    {filterdData.map((item) => (
      <DesCard
        key={item.id}
        name={item.name}
        img={item.img}
        des={item.des}
        warn={item.warn}
      ></DesCard>
    ))}
  </div>
  );
};

export default BackPartDes;
