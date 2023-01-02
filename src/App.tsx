import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/1.mainpage";
import HowToWorkOut from "./pages/2.how-to-workout";
import HowToWeightLoss from "./pages/3.how-to-weight-loss";
import FindFoods from "./pages/4.find-foods";
import Adding from "./components/0.adding/adding";
import {
  sendRequest as sendRequestForExercise,
  useAppDispatch,
} from "./store/exercise-action";
import { sendRequest as sendRequestForFoods } from "./store/foods-action";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(sendRequestForExercise());
    dispatch(sendRequestForFoods());
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
      </Switch>
    </div>
  );
}

export default App;
