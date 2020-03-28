import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavigationBar from "./NavigationBar";
import FeedbackToMePage from "./toMeFeedback";
import FeedbackByMePage from "./byMeFeedback";
import ShareFeedbackList from "./questionnaire/ShareFeedbackList";
import Questionnaire from "./questionnaire";
import SuccessFeedback from "./successFeedback";

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
          <Route exact path="/">
            <Redirect to="/share-feedback" />
          </Route>
          <Route path="/share-feedback/:userId" component={Questionnaire} />
          <Route path="/share-feedback" component={ShareFeedbackList} />
          <Route path="/by-me-feedback" component={FeedbackByMePage} />
          <Route path="/to-me-feedback" component={FeedbackToMePage} />
          <Route path="/success-feedback" component={SuccessFeedback} />
          <Route component={() => <div>you are lost this is a 404</div>} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default Routes;
