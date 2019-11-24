import { of } from "rxjs";
import { switchMap, flatMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import {
  FETCH_SHARE_FEEDBACK,
  FETCH_SHARE_FEEDBACK_SUCCESS
} from "./actionTypes";
import { fetchShareFeedback } from "./service";

export function shareFeedbackEpic(action$) {
  return action$.pipe(
    ofType(FETCH_SHARE_FEEDBACK),
    switchMap(fetchShareFeedback),
    flatMap(({ response }) =>
      of({ type: FETCH_SHARE_FEEDBACK_SUCCESS, payload: response })
    )
  );
}
