import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddStockPage from "./pages/AddStockPage";
import HomePage from "./pages/HomePage";
import MainScreen from "./pages/MainScreen";
import { StockScreen } from "./pages/StockScreen";

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
        <Route exact path="/stock">
          <StockScreen />
        </Route>
        <Route exact path="/home">
          <MainScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
