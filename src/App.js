import { Switch, Route } from "react-router-dom";
import "./App.css";
import List from "./User/List/Lists";
import Chart from "./User/Graph/Chart";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/chart" component={Chart} />
      </Switch>
    </div>
  );
}

export default App;
