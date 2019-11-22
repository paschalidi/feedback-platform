import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { toMeFeedbackReducer } from "../toMeFeedback/reducer";
import { byMeFeedbackReducer } from "../byMeFeedback/reducer";
import { toMeFeedbackEpic } from "../toMeFeedback/epic";
import { byMeFeedbackEpic } from "../byMeFeedback/epic";

export const rootEpic = combineEpics(toMeFeedbackEpic, byMeFeedbackEpic);
export const rootReducer = combineReducers({
  toMeFeedbackReducer,
  byMeFeedbackReducer
});
