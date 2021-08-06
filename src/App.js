import { Switch, Route } from "react-router-dom";
import "./App.css";
import List from "./User/Lists";
import Graph from "./User/Graph";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/graph" component={Graph} />
      </Switch>
    </div>
  );
}

export default App;
