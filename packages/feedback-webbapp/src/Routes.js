import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./navigationBar";
import FeedbackToMePage from "./feedbackToMe/Page";

const menuItems = {
  0: { title: "Share feedback", route: "/share-feedback" },
  1: { title: "My feedback", route: "/my-feedback" },
  2: { title: "Team feedback", route: "/team-feedback" }
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
          <Route path="/my-feedback">{() => <div>my-feedback</div>}</Route>
          <Route path="/team-feedback" component={FeedbackToMePage} />
          <Route path="/">{() => <div>home</div>}</Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default Routes;
