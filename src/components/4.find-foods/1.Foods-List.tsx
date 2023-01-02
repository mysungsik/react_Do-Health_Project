import FoodPreview from "../UI/foodsCard/food-previewcard";
import styles from "./1.Foods-List.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

//category, title, majorNutri, nutri, price

const FoodsList = () => {
  const foodsData = useSelector((state: RootState) => state.foods.foodsData);
  const [selected, setSelected] = useState<string>("탄수화물");

  const filteredData = foodsData.filter((food) => food.majorNutri === selected);

  let selected_style = styles.selected_hydro; // 초기 백그라운드 조건
  let text_highlight_hydro = ""; // 초기 텍스트 조건
  let text_highlight_protein = "";
  let text_highlight_fat = "";

  if (selected === "탄수화물") {
    selected_style = styles.selected_hydro; // 선택시 클래스 변경
    text_highlight_hydro = styles.selected_text_hydro; // 선택시 클래스 변경
  }
  if (selected === "단백질") {
    selected_style = styles.selected_protein;
    text_highlight_protein = styles.selected_text_protein;
  }
  if (selected === "지방") {
    selected_style = styles.selected_fat;
    text_highlight_fat = styles.selected_text_fat;
  }
  return (
    <div className={styles.main_div}>
      <ul className={styles.select_category}>
        {/* 움직이는 백그라운드 div */}
        <div className={selected_style}></div>
        <li onClick={() => setSelected("탄수화물")}>
          <p className={text_highlight_hydro}>탄수화물</p>
        </li>
        <li onClick={() => setSelected("단백질")}>
          <p className={text_highlight_protein}>단백질</p>
        </li>
        <li onClick={() => setSelected("지방")}>
          <p className={text_highlight_fat}>지방</p>
        </li>
      </ul>
      <div className={styles.main_div_title}>
        <img src="/3.loss-weight/icons8-fire-alt-100.png" alt="icon" />
        <p> 이 음식은 어떠신가요?</p>
      </div>

      <div className={styles.main_grid}>
        {filteredData.map((food) => (
          <FoodPreview
            key={food.id}
            id={food.id}
            img={food.img}
            category={food.category}
            name={food.name}
            majorNutri={food.majorNutri}
            nutri={food.nutri}
            price={food.price}
          />
        ))}
      </div>
    </div>
  );
};
export default FoodsList;
