import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/1.mainpage";
import HowToWorkOut from "./pages/2.how-to-workout";
import HowToWeightLoss from "./pages/3.how-to-weight-loss";

function App() {
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
      </Switch>
    </div>
  );
}

export default App;
