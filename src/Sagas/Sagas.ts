import { call, put, takeEvery} from 'redux-saga/effects'
import {request, requestSuccess, requestError} from '../Actions/actions'

function* watchFetch() {
  yield takeEvery('FETCHED', fetchAsync)
}

function* fetchAsync(action: any) {
  try {
    yield put(request());
    const data = yield call(
      () => {
        return fetch(action.payload)
              .then(res => res.json())
              .then(res => eval(res))
      }
    );
    yield put(requestSuccess(data));
  } catch(e) {
    yield put(requestError())
  }
}

export default watchFetch;

