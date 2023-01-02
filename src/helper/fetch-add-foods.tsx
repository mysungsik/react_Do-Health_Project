export type PostType = {
  id: string;
  name: string;
  img: string;
  category: string;
  majorNutri: string;
  nutri: string;
  price: number;
};

export const postFoods = async (foodsData: PostType) => {
  await fetch(
    "https://do-health-project-default-rtdb.firebaseio.com/foods.json",
    {
      method: "POST",
      body: JSON.stringify(foodsData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

// id : f1, f2 ...
// img : "/4.foods/카테고리이름(carbohydrates,protein,fat)/이미지이름"
// category : 다이어트, 벌크업, 린매스업
// majorNutri : 단백질, 지방, 탄수화물
// nutri : 지방 15g ...
// price : 1000 ...
