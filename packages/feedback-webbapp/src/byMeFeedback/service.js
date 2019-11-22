import { ajax } from "rxjs/ajax";

export function fetchByMeFeedback() {
  return ajax({
    url:
      "https://my-json-server.typicode.com/paschalidi/feedback-json-server/by-me-feedback",
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
}
