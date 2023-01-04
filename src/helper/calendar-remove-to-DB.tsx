export const removeCalendarToDb = async (firebaseid: string) => {
  await fetch(
    `https://do-health-project-default-rtdb.firebaseio.com/user/calendar/${firebaseid}.json`,
    {
      method: "DELETE",
    }
  );
};
