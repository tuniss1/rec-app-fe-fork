import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import AddStockPage from "./pages/AddStockPage";

import HomePage from "./pages/HomePage";

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

export default App;
