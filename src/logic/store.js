import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducer from "./reducer";
import mainSaga from "./sagas";

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const persistedReducer = persistReducer(
    {
      key: "root",
      storage,
      whitelist: ["auth"],
    },
    reducer
  );

  let composeEnhancers = compose;

  if (process.env.NODE_ENV === "development") {
    if(typeof window !== "undefined"){
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }else{
        composeEnhancers=compose
    }
  }

  const store = composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware)
  )(createStore)(persistedReducer);

  const persistor = persistStore(store);

  sagaMiddleware.run(mainSaga);

  return { store, persistor };
};
