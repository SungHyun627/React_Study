// 파라미터로 action의 type과 Promise를 만들어주는 함수
export function createAsyncDispatcher(type, promiseFn) {
  // 성공, 실패에 대한 액션 타입 문자열
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  async function actionHandler(dispatch, ...rest) {
    dispatch({ type });
    try {
      const data = await promiseFn(...rest);
      //   성공
      dispatch({ type: SUCCESS, data });
    } catch (e) {
      // 실패
      dispatch({ type: ERROR, error: e });
    }
  }
  return actionHandler;
}

export const initialAsyncState = {
  loading: false,
  data: null,
  error: null,
};

// 로딩중일 때 바뀔 state object
const loadingState = {
  loading: true,
  data: null,
  error: null,
};

// SUCCESS일 때 상태 만들어주는 함수
const success = (data) => ({
  loading: false,
  data,
  error: null,
});

// ERROR일 때 상태 만들어주는 함수
const error = (error) => ({
  loading: false,
  data: null,
  error: error,
});

// 세가지 액션을 처라하는 reducer
// type: 액션 타입, key: reducer field에서 사용할 필드 이름

export function createAsyncHandler(type, key) {
  // 성공, 실패에 대한 액션 문자열
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  const handler = (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: loadingState,
        };
      case SUCCESS:
        return {
          ...state,
          [key]: success(action.data),
        };
      case ERROR:
        return {
          ...state,
          [key]: error(action.error),
        };
      default:
        return state;
    }
  };
  return handler;
}

//
