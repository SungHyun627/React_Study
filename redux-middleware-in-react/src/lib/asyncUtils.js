import { call, put } from "redux-saga/effects";

// Promise에 기반한 Thunk를 만들어주는 함수
// export const createPromiseThunk = (type, promiseCreator) => {
//   const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

//   return (param) => async (dispatch) => {
//     // 요청 시작
//     dispatch({ type, param });
//     try {
//       // 결과물 : payload
//       const payload = await promiseCreator(param);
//       dispatch({ type: SUCCESS, payload });
//     } catch (e) {
//       dispatch({ type: ERROR, payload: e, error: true });
//     }
//   };
// };

//프로미스를 기다렸다가 결과를 dispatch 하는 saga
export const createPromiseSaga = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return function* saga(action) {
    try {
      // 재사용성을 위해 action.payload값 설정
      const payload = yield call(promiseCreator, action.payload);
    } catch (e) {
      yield put({ type: ERROR, error: true, payload: e });
    }
  };
};

// 특정 id의 데이터를 조회하는 용도로 사용하는 saga
// api 호출시 action.payload를 parameter로 id값을 action.meta로 설정
export const createPromiseSagaById = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return function* saga(action) {
    const id = action.meta;
    try {
      const payload = yield call(promiseCreator, action.payload);
      yield put({ type: SUCCESS, payload, meta: id });
    } catch (e) {
      yield put({ type: ERROR, error: e, meta: id });
    }
  };
};

// 리듀서에서 사용할 수 있는 여러 유틸 함수들
export const reducerUtils = {
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
  }),

  //   로딩중인 상태
  loading: (preState = null) => ({
    loading: true,
    data: preState,
    error: null,
  }),

  // 성공 상태
  success: (payload) => ({
    loading: false,
    data: payload,
    error: null,
  }),
  //   실패 상태
  error: (error) => ({
    loading: false,
    data: null,
    error: error,
  }),
};

// 비동기 관련 액션들을 처리하는 리듀서
// type: 액션 타입, key : 상태의 key(posts, post)
export const handleAsyncActions = (type, key, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(keepData ? state[key].data : null),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.error),
        };
      default:
        return state;
    }
  };
};

// 특정 id를 처리하는 Thunk 생성함수
// const defaultIdSelector = (param) => param;
// export const createPromiseThunkById = (
//   type,
//   promiseCreator,
//   idSelector = defaultIdSelector
// ) => {
//   const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
//   return (param) => async (dispatch) => {
//     const id = idSelector(param);
//     dispatch({ type, meta: id });
//     try {
//       const payload = await promiseCreator(param);
//       dispatch({ type: SUCCESS, payload, meta: id });
//     } catch (e) {
//       dispatch({ type: ERROR, error: true, payload: e, meta: id });
//     }
//   };
// };

// id별로 처리하는 유틸함수
export const handleAsyncActionsById = (type, key, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    const id = action.meta;
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.loading(
              keepData ? state[key][id] && state[key][id].data : null
            ),
          },
        };
      case SUCCESS:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.success(action.payload),
          },
        };
      case ERROR:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.error(action.payload),
          },
        };
      default:
        return state;
    }
  };
};
