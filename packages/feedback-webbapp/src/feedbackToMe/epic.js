import { of } from "rxjs";
import { switchMap, flatMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import {
  FETCH_TO_ME_FEEDBACK,
  FETCH_TO_ME_FEEDBACK_SUCCESS
} from "./actionTypes";
import { fetchToMeFeedback } from "./service";

export function toMeFeedbackEpic(action$) {
  return action$.pipe(
    ofType(FETCH_TO_ME_FEEDBACK),
    switchMap(fetchToMeFeedback),
    flatMap(({ response }) =>
      of({ type: FETCH_TO_ME_FEEDBACK_SUCCESS, payload: response })
    )
  );
}
