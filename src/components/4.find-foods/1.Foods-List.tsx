import FoodPreview from "../UI/foodsCard/food-previewcard";
import styles from "./1.Foods-List.module.css";
import { useState, useEffect } from "react";

//category, title, majorNutri, nutri, price

interface FoodType {
  id: number;
  img: string;
  category: string;
  title: string;
  majorNutri: string;
  nutri: string;
  price: number;
}

const FoodsList = () => {
  // 추후 FireBase DB 에서 fetch 해서 가져오도록 하자. 일단 샘플 데이터 두개

  const [selected, setSelected] = useState<string>("탄수화물");
  const [foodsData, setFoodsData] = useState<FoodType[]>([
    {
      id: 1,
      category: "다이어트",
      img: "/4.foods/claudio-schwarz-4qJlXK4mYzU-unsplash.jpg",
      title: "최고의 단백질 보충제 닭가슴살",
      majorNutri: "단백질",
      nutri: "Protein 22g",
      price: 1000,
    },
    {
      id: 2,
      category: "벌크업",
      img: "/4.foods/claudio-schwarz-4qJlXK4mYzU-unsplash.jpg",
      title: "최고의 지방 보충제 아보카도",
      majorNutri: "지방",
      nutri: "Fat 15g",
      price: 2000,
    },
    {
      id: 3,
      category: "린매스업",
      img: "/4.foods/claudio-schwarz-4qJlXK4mYzU-unsplash.jpg",
      title: "맛좋은 단백질 보충제 소고기볼",
      majorNutri: "단백질",
      nutri: "Protein 15g",
      price: 2000,
    },
  ]);

  // filter 될 FoodData
  const [selectedFoods, setSelectedFoods] = useState<FoodType[]>([]);

  // filter 되는 로직
  useEffect(() => {
    setSelectedFoods(foodsData.filter((food) => food.majorNutri === selected));
  }, [selected]);

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
        <img src="/3.loss-weight/icons8-fire-alt-100.png" />
        <p> 이 음식은 어떠신가요?</p>
      </div>

      <div className={styles.main_grid}>
        {selectedFoods.map((food) => (
          <FoodPreview
            key={food.id}
            id={food.id}
            img={food.img}
            category={food.category}
            title={food.title}
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
