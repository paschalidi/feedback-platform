import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./navigationBar";
import FeedbackToMePage from "./toMeFeedback/Page";
import FeedbackByMePage from "./byMeFeedback/Page";

const menuItems = {
  0: { title: "Share feedback", route: "/share-feedback" },
  1: { title: "My feedback", route: "/by-me-feedback" },
  2: { title: "Team feedback", route: "/to-me-feedback" }
};
function Routes() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar menuItems={menuItems} />
        <Switch>
          <Route path="/share-feedback">
            {() => <div>share-feedback</div>}
          </Route>
          <Route path="/by-me-feedback" component={FeedbackByMePage} />
          <Route path="/to-me-feedback" component={FeedbackToMePage} />
          <Route path="/">{() => <div>home</div>}</Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default Routes;
