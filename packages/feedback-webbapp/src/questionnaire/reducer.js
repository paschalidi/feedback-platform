import { FETCH_SHARE_FEEDBACK_SUCCESS } from "./actionTypes";

export function shareFeedbackReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SHARE_FEEDBACK_SUCCESS:
      return payload.reduce(
        (acc, userFeedback) => ({
          ...acc,
          [userFeedback.id]: userFeedback
        }),
        {}
      );
    default:
      return state;
  }
}
