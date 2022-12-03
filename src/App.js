import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import AddStockPage from "./pages/AddStockPage";

import HomePage from "./pages/HomePage";
import { Months } from "./pages/Months";
import { HomeScreen } from "./pages/HomeScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/stocks/add">
          <AddStockPage />
        </Route>
      </Switch>
    </Router>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
export default App;
