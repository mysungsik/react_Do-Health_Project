import AddExercise from "./add-exercise";
import AddFoods from "./add-foods";
import styles from "./adding.module.css";

const Adding = () => {
  return (
    <div className={styles.main_div}>
      <AddExercise />
      <hr className="cross_line_purple_thick" />
      <AddFoods />
    </div>
  );
};

export default Adding;
