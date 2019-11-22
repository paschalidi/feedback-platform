import { ajax } from "rxjs/ajax";

export function fetchToMeFeedback() {
  return ajax({
    url:
      "https://my-json-server.typicode.com/paschalidi/feedback-json-server/to-me-feedback",
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
}
