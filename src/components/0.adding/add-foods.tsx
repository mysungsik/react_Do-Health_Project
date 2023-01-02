// id : f1, f2 ...
// img : "/4.foods/카테고리이름(carbohydrates,protein,fat)/이미지이름"
// category : 다이어트, 벌크업, 린매스업
// majorNutri : 단백질, 지방, 탄수화물
// nutri : 지방 15g ...
// price : 1000 ...

// id / img / category / title / majorNutri / nutri / price

import { FormEvent, useState } from "react";
import styles from "./add-foods.module.css";
import { postFoods } from "../../helper/fetch-add-foods";

const AddFoods = () => {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [img, setImg] = useState<string>("/4.foods/");
  const [category, setCategory] = useState<string>("");
  const [majorNutri, setMajorNutri] = useState<string>("");
  const [nutri, setNutri] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  //fetch
  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    const exerciseData = { id, name, img, category, majorNutri, nutri, price }; // 넣을 데이터

    await postFoods(exerciseData);

    setId(() => ""); // 리셋
    setName(() => "");
    setImg(() => "");
    setCategory(() => "");
    setImg(() => "/4.foods/");
    setMajorNutri(() => "");
    setNutri(() => "");
    setPrice(() => 0);
  };

  return (
    <div className={styles.main_div}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="id"> 아이디 </label>
          <input
            placeholder="f1,f2..."
            type={"text"}
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name"> 이름 </label>
          <input
            placeholder="최고의 단백질 보충원 닭가슴살"
            type={"text"}
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="img"> 이미지 </label>
          <input
            type={"text"}
            id="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category"> 카테고리 </label>
          <input
            placeholder="다이어트, 린매스업"
            type={"text"}
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="majorNutri"> 주요 영양소 </label>
          <input
            placeholder="탄수화물, 단백질, 지방"
            type={"text"}
            id="majorNutri"
            value={majorNutri}
            onChange={(e) => setMajorNutri(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="nutri"> 주요 영양성분량 </label>
          <input
            placeholder="탄수화물 30g, 지방 15g ... "
            type={"text"}
            id="nutri"
            value={nutri}
            onChange={(e) => setNutri(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="price"> 가격 </label>
          <input
            placeholder="1500, 2000 ..."
            type={"number"}
            id="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <button> 제출</button>
        </div>
      </form>
    </div>
  );
};

export default AddFoods;
