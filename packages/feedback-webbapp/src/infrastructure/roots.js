import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { toMeFeedbackReducer } from "../feedbackToMe/reducer";
import { toMeFeedbackEpic } from "../feedbackToMe/epic";

export const rootEpic = combineEpics(toMeFeedbackEpic);
export const rootReducer = combineReducers({ toMeFeedbackReducer });
