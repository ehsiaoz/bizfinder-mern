import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import ResultsPage from "./pages/ResultsPage";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={ResultsPage}></IndexRoute>
      <Route path="/:category(/:location)" name="catloc" component={ResultsPage}></Route>
    </Route>
  </Router>,
app);
