import { FETCH_TO_ME_FEEDBACK_SUCCESS } from "./actionTypes";

export function toMeFeedbackReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_TO_ME_FEEDBACK_SUCCESS:
      return payload;
    default:
      return state;
  }
}
