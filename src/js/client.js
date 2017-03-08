import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import ResultsPage from "./pages/ResultsPage";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={ResultsPage}></IndexRoute>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);