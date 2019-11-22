import { of } from "rxjs";
import { switchMap, flatMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import {
  FETCH_BY_ME_FEEDBACK,
  FETCH_BY_ME_FEEDBACK_SUCCESS
} from "./actionTypes";
import { fetchByMeFeedback } from "./service";

export function byMeFeedbackEpic(action$) {
  return action$.pipe(
    ofType(FETCH_BY_ME_FEEDBACK),
    switchMap(fetchByMeFeedback),
    flatMap(({ response }) =>
      of({ type: FETCH_BY_ME_FEEDBACK_SUCCESS, payload: response })
    )
  );
}
