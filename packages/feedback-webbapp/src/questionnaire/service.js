import { ajax } from "rxjs/ajax";

export function fetchShareFeedback() {
  return ajax({
    url:
      "https://my-json-server.typicode.com/paschalidi/feedback-json-server/share-feedback",
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
}
