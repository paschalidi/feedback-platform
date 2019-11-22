import { createEpicMiddleware } from "redux-observable";
import { applyMiddleware, createStore, compose } from "redux";
import { rootEpic, rootReducer } from "./roots";

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware();

  const middleware = [epicMiddleware];

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
