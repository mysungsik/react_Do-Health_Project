import AddExercise from "./add-exercise";
import AddFoods from "./add-foods";

const Adding = () => {
  return (
    <div>
      <AddExercise />
      <hr className="cross_line_purple_thick" />
      <AddFoods />
    </div>
  );
};

export default Adding;
