export type PostType = {
  id: string;
  part: string;
  name: string;
  img: string;
  des: {text: string }[];
  warn: {text: string }[];
};

export const postExercise = async (exerciseData: PostType) => {
  await fetch("https://do-health-project-default-rtdb.firebaseio.com/exercise.json", {
    method: "POST",
    body: JSON.stringify(exerciseData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};