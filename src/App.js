import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PollPage from "./pages/PollPage";

import CreatePoll from "./components/CreatePoll";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/create" component={CreatePoll} />
        <Route path="/polls/:id" component={PollPage} />
      </Switch>
    </Router>
  );
};

export default App;
