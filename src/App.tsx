import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";

import { removeCalendarToDb } from "./helper/calendar-remove-to-DB";

import MainPage from "./pages/1.mainpage";
import HowToWorkOut from "./pages/2.how-to-workout";
import HowToWeightLoss from "./pages/3.how-to-weight-loss";
import FindFoods from "./pages/4.find-foods";
import Adding from "./components/0.adding/adding";
import SignUp from "./pages/5.signup";
import SignIn from "./pages/6.signin";
import Calendar from "./fullcalendar/calendar";
import NotFoundPage from "./pages/notfountd";

import { PostCalendarType } from "./store/calendar-slice";
import {
  sendRequest as sendRequestForExercise,
  useAppDispatch,
} from "./store/exercise-action";
import { sendRequest as sendRequestForFoods } from "./store/foods-action";
import { sendRequest as sendRequestForCalendars } from "./store/calendar-action";
import { useCookies } from "react-cookie";
import { userAction } from "./store/userData-slice";

function App() {
  const [cookies] = useCookies(["auth-cookie"]);
  const history = useHistory();
  const dispatch = useAppDispatch();

  // Store 에서 캘린더 값 넘겨받기
  const calendarData = useSelector(
    (state: RootState) => state.calendar.calendarData
  );

  //캘린더 값 필터하기
  let filteredCalendar: PostCalendarType[] = [];

  if (cookies["auth-cookie"]) {
    filteredCalendar = calendarData.filter(
      (data) => data.email === cookies["auth-cookie"].email
    );
  }

  // 캘린더 안의 delete 하기 위한 값 넘겨받기, 삭제하기
  const dataFromCalendarForDelete = (id: string, email: string) => {
    const selectedFirebaseData = calendarData.find(
      (item) => item.id === id && item.email === email
    );

    if (selectedFirebaseData !== undefined) {
      const selectedFirebaseId = selectedFirebaseData.firebaseid;

      removeCalendarToDb(selectedFirebaseId);
    }
  };

  // getOut함수 만들기 값 넘겨받기
  const getOut = () => {
    history.replace("/");
  };

  useEffect(() => {
    dispatch(sendRequestForExercise());
    dispatch(sendRequestForFoods());
    dispatch(sendRequestForCalendars());
    if (cookies["auth-cookie"]) {
      dispatch(
        userAction.loginedUser({ userEmail: cookies["auth-cookie"].email })
      );
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/work-out">
          <HowToWorkOut />
        </Route>
        <Route path="/weight-loss" exact>
          <HowToWeightLoss />
        </Route>
        <Route path={"/find-foods"}>
          <FindFoods />
        </Route>
        <Route path={"/adding"}>
          <Adding />
        </Route>
        <Route path={"/sign-up"}>
          <SignUp />
        </Route>
        <Route path={"/sign-in"}>
          <SignIn />
        </Route>
        {cookies["auth-cookie"] && (
          <Route path={"/calendar"}>
            <Calendar
              calendarData={filteredCalendar}
              getOut={getOut}
              isLogedIn={cookies["auth-cookie"]} // 로그인 했는지 확인
              dataFromCalendarForDelete={dataFromCalendarForDelete}
            />
          </Route>
        )}
        <Route path={"*"}>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
