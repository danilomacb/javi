import { all, call, takeEvery, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import { ADD_TO_WATCH } from "../../state/actions/toWatch";
import { SET_MESSAGE } from "../../state/actions/message";

function* addToWatch(action) {
  const endpoint = "/to-watch/add";
  const response = yield call(fetch, endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(action.toWatch)
  });

  const responseMessage = yield response.json();
  yield put({ type: SET_MESSAGE, responseMessage });

  if (response.status === 200) {
    yield put(push("/lista-para-assistir"));
  }
}

function* getAction() {
  yield takeEvery(ADD_TO_WATCH, addToWatch);
}

export default function* runAddToWatch() {
  yield all([getAction()]);
}
