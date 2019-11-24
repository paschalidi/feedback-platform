import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { toMeFeedbackReducer } from "../toMeFeedback/reducer";
import { toMeFeedbackEpic } from "../toMeFeedback/epic";
import { byMeFeedbackReducer } from "../byMeFeedback/reducer";
import { byMeFeedbackEpic } from "../byMeFeedback/epic";
import { shareFeedbackReducer } from "../questionnaire/reducer";
import { shareFeedbackEpic } from "../questionnaire/epic";

export const rootEpic = combineEpics(
  toMeFeedbackEpic,
  byMeFeedbackEpic,
  shareFeedbackEpic
);
export const rootReducer = combineReducers({
  toMeFeedbackReducer,
  byMeFeedbackReducer,
  shareFeedbackReducer
});
