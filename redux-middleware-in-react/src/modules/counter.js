import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

// 액션 타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const INCREASE_ASYNC = "INCREASE_ASYNC";
const DECREASE_ASYNC = "DECREASE_ASYNC";

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increase_Async = () => ({ type: INCREASE_ASYNC });
export const decrease_Async = () => ({ type: DECREASE_ASYNC });

// thunk 함수 생성
// export const increaseAsync = () => (dispatch) => {
//   setTimeout(() => dispatch(increase()), 1000);
// };

// export const decreaseAsync = () => (dispatch) => {
//   setTimeout(() => dispatch(decrease()), 1000);
// };

function* increaseSaga() {
  // 1초 기다림
  yield delay(1000);
  // put은 특정 액션을 dispatch
  yield put(increase());
}

function* decreaseSaga() {
  // 1초 기다림
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  // 모든 INCREASE_ASYNC 처리
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  // 가장 마지막으로 dispatch된 DECREASE_AYSNC 액션만을 처리
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

// 초기값
const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
