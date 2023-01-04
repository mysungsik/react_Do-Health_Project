export type PostCalendarType = {
  id: string;
  title: string;
  start: string;
  email: string;
};

export const addCalendarToDb = async (exerciseData: PostCalendarType) => {
  await fetch(
    "https://do-health-project-default-rtdb.firebaseio.com/user/calendar.json",
    {
      method: "POST",
      body: JSON.stringify(exerciseData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
