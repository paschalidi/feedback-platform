import { FETCH_BY_ME_FEEDBACK_SUCCESS } from "./actionTypes";

export function byMeFeedbackReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_BY_ME_FEEDBACK_SUCCESS:
      return payload;
    default:
      return state;
  }
}
